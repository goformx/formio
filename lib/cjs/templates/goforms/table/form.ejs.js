Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<table class="<%= cssClasses[\'form-table\'] %>\n    ' +
((__t = ( ctx.component.striped ? ' ' + cssClasses['form-table-striped'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? ' ' + cssClasses['form-table-bordered'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? ' ' + cssClasses['form-table-hover'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? ' ' + cssClasses['form-table-condensed'] : '')) == null ? '' : __t) +
'\n  ">\n  <caption class="<%= cssClasses[\'form-table-caption\'] %>">' +
((__t = (ctx.t(ctx.component.label))) == null ? '' : __t) +
'</caption>\n  ';
 if (ctx.component.header && ctx.component.header.length > 0) { ;
__p += '\n  <thead class="<%= cssClasses[\'form-table-header\'] %>">\n    <tr class="<%= cssClasses[\'form-table-row\'] %>">\n      ';
 ctx.component.header.forEach(function(header) { ;
__p += '\n      <th class="<%= cssClasses[\'form-table-header-cell\'] %>" scope="col">' +
((__t = (ctx.t(header))) == null ? '' : __t) +
'</th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody class="<%= cssClasses[\'form-table-body\'] %>">\n    ';
 ctx.tableComponents.forEach(function(row, rowIndex) { ;
__p += '\n    <tr class="<%= cssClasses[\'form-table-row\'] %>" ref="row-' +
((__t = (ctx.id)) == null ? '' : __t) +
'">\n      ';
 row.forEach(function(column, colIndex) { ;
__p += '\n      <td class="<%= cssClasses[\'form-table-cell\'] %>';
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