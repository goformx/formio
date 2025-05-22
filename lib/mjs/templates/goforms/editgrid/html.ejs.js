export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<ul class="<%= cssClasses[\'form-editgrid-list\'] %>\n    ' +
((__t = ( ctx.component.striped ? cssClasses['form-editgrid-striped'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? cssClasses['form-editgrid-bordered'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? cssClasses['form-editgrid-hover'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? cssClasses['form-editgrid-condensed'] : '')) == null ? '' : __t) +
'\n    ">\n  ';
 if (ctx.header) { ;
__p += '\n  <li class="<%= cssClasses[\'form-editgrid-header\'] %>">\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n  <li class="<%= cssClasses[\'form-editgrid-item\'] %>" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n    ' +
((__t = (row)) == null ? '' : __t) +
'\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n    <div class="<%= cssClasses[\'form-editgrid-actions\'] %>">\n      <button class="<%= cssClasses[\'form-editgrid-save\'] %>" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'save', { _userInput: !!ctx.component.saveRow }))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.component.removeRow) { ;
__p += '\n      <button class="<%= cssClasses[\'form-editgrid-cancel\'] %>" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'cancel', { _userInput: !!ctx.component.removeRow }))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n    <div class="<%= cssClasses[\'form-editgrid-error-container\'] %>">\n      <div class="<%= cssClasses[\'form-editgrid-error\'] %>">\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n      </div>\n    </div>\n  </li>\n  ';
 }) ;
__p += '\n  ';
 if (ctx.footer) { ;
__p += '\n  <li class="<%= cssClasses[\'form-editgrid-footer\'] %>">\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n</ul>\n';
return __p
}