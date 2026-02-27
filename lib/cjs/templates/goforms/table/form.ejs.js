Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="w-full text-sm\n    ' +
((__t = ( ctx.component.striped ? '[&_tbody_tr:nth-child(odd)]:bg-muted/50' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? 'border border-border [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? '[&_tbody_tr]:hover:bg-muted/50' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? '[&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1' : '')) == null ? '' : __t) +
'\n  ">\n  <caption class="sr-only">' +
((__t = (ctx.t(ctx.component.label))) == null ? '' : __t) +
'</caption>\n  ';
 if (ctx.component.header && ctx.component.header.length > 0) { ;
__p += '\n  <thead>\n    <tr>\n      ';
 ctx.component.header.forEach(function(header) { ;
__p += '\n      <th scope="col">' +
((__t = (ctx.t(header))) == null ? '' : __t) +
'</th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody>\n    ';
 ctx.tableComponents.forEach(function(row, rowIndex) { ;
__p += '\n    <tr ref="row-' +
((__t = (ctx.id)) == null ? '' : __t) +
'">\n      ';
 row.forEach(function(column, colIndex) { ;
__p += '\n      <td scope="col" ref="' +
((__t = (ctx.tableKey)) == null ? '' : __t) +
'-' +
((__t = (rowIndex)) == null ? '' : __t) +
'"';
 if (ctx.cellClassName) { ;
__p += ' class="' +
((__t = (ctx.cellClassName)) == null ? '' : __t) +
'"';
 } ;
__p += '>' +
((__t = (column)) == null ? '' : __t) +
'</td>\n      ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}