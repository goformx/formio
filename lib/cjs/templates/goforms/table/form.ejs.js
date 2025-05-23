Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="' +
((__t = ( ctx.cssClasses['form-table'] )) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.striped ? ' ' + cssClasses['form-table-striped'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? ' ' + cssClasses['form-table-bordered'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? ' ' + cssClasses['form-table-hover'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? ' ' + cssClasses['form-table-condensed'] : '')) == null ? '' : __t) +
'\n  ">\n  <caption class="' +
((__t = ( ctx.cssClasses['form-table-caption'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.label))) == null ? '' : __t) +
'</caption>\n  ';
 if (ctx.component.header && ctx.component.header.length > 0) { ;
__p += '\n  <thead class="' +
((__t = ( ctx.cssClasses['form-table-header'] )) == null ? '' : __t) +
'">\n    <tr class="' +
((__t = ( ctx.cssClasses['form-table-row'] )) == null ? '' : __t) +
'">\n      ';
 ctx.component.header.forEach(function(header) { ;
__p += '\n      <th class="' +
((__t = ( ctx.cssClasses['form-table-header-cell'] )) == null ? '' : __t) +
'" scope="col">' +
((__t = (ctx.t(header))) == null ? '' : __t) +
'</th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody class="' +
((__t = ( ctx.cssClasses['form-table-body'] )) == null ? '' : __t) +
'">\n    ';
 ctx.tableComponents.forEach(function(row, rowIndex) { ;
__p += '\n    <tr class="' +
((__t = ( ctx.cssClasses['form-table-row'] )) == null ? '' : __t) +
'" ref="row-' +
((__t = (ctx.id)) == null ? '' : __t) +
'">\n      ';
 row.forEach(function(column, colIndex) { ;
__p += '\n      <td class="' +
((__t = ( ctx.cssClasses['form-table-cell'] )) == null ? '' : __t);
 if (ctx.cellClassName) { ;
__p += ' ' +
((__t = (ctx.cellClassName)) == null ? '' : __t);
 } ;
__p += '" scope="col" ref="' +
((__t = (ctx.tableKey)) == null ? '' : __t) +
'-' +
((__t = (rowIndex)) == null ? '' : __t) +
'">' +
((__t = (column)) == null ? '' : __t) +
'</td>\n      ';
 }) ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}