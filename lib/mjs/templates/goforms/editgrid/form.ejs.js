export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<ul class="' +
((__t = ( cssClasses['form-editgrid-list'] )) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.striped ? cssClasses['form-editgrid-striped'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? cssClasses['form-editgrid-bordered'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? cssClasses['form-editgrid-hover'] : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? cssClasses['form-editgrid-condensed'] : '')) == null ? '' : __t) +
'\n    ">\n  ';
 if (ctx.header) { ;
__p += '\n  <li class="' +
((__t = ( cssClasses['form-editgrid-header'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n  <li class="' +
((__t = ( cssClasses['form-editgrid-item'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n    ' +
((__t = (row)) == null ? '' : __t) +
'\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n    <div class="' +
((__t = ( cssClasses['form-editgrid-actions'] )) == null ? '' : __t) +
'">\n      <button class="' +
((__t = ( cssClasses['form-editgrid-save'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'save', { _userInput: !!ctx.component.saveRow }))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.component.removeRow) { ;
__p += '\n      <button class="' +
((__t = ( cssClasses['form-editgrid-cancel'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'cancel', { _userInput: !!ctx.component.removeRow }))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n    <div class="' +
((__t = ( cssClasses['form-editgrid-error-container'] )) == null ? '' : __t) +
'">\n      <div class="' +
((__t = ( cssClasses['form-editgrid-error'] )) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n      </div>\n    </div>\n  </li>\n  ';
 }) ;
__p += '\n  ';
 if (ctx.footer) { ;
__p += '\n  <li class="' +
((__t = ( cssClasses['form-editgrid-footer'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n</ul>\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\n<button class="' +
((__t = ( cssClasses['form-editgrid-add'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.addRow)) == null ? '' : __t) +
'">\n  <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'addAnother', { _userInput: !!ctx.component.addAnother}))) == null ? '' : __t) +
'\n</button>\n';
 } ;
__p += '\n';
return __p
}