export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-container'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-responsive'] )) == null ? '' : __t) +
'">\n    <table class="' +
((__t = ( ctx.cssClasses['form-editgrid-table'] )) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.striped ? cssClasses['form-editgrid-table-striped'] : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.bordered ? cssClasses['form-editgrid-table-bordered'] : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.hover ? cssClasses['form-editgrid-table-hover'] : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.condensed ? cssClasses['form-editgrid-table-condensed'] : '')) == null ? '' : __t) +
'\n    ">\n      ';
 if (ctx.header) { ;
__p += '\n      <thead class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-head'] )) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n      </thead>\n      ';
 } ;
__p += '\n      <tbody class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-body'] )) == null ? '' : __t) +
'">\n        ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n        <tr ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n          ' +
((__t = (row)) == null ? '' : __t) +
'\n          ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n            <td class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-column'] )) == null ? '' : __t) +
'">\n              <div class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-actions'] )) == null ? '' : __t) +
'">\n                <button class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-save'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'save', { _userInput: !!ctx.component.saveRow }))) == null ? '' : __t) +
'</button>\n                ';
 if (ctx.component.removeRow) { ;
__p += '\n                <button class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-cancel'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'cancel', { _userInput: !!ctx.component.removeRow }))) == null ? '' : __t) +
'</button>\n                ';
 } ;
__p += '\n              </div>\n            </td>\n          ';
 } ;
__p += '\n          ';
 if (ctx.errors[rowIndex]) { ;
__p += '\n          <td class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-column'] )) == null ? '' : __t) +
'">\n            <div class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-error-container'] )) == null ? '' : __t) +
'">\n              <div class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-error'] )) == null ? '' : __t) +
'">\n                ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n              </div>\n            </div>\n          </td>\n          ';
 } ;
__p += '\n        </tr>\n        ';
 }) ;
__p += '\n      </tbody>\n      ';
 if (ctx.footer) { ;
__p += '\n      <tfoot>\n        <tr>\n          ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n        </tr>\n      </tfoot>\n      ';
 } ;
__p += '\n    </table>\n  </div>\n</div>\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\n<button class="' +
((__t = ( ctx.cssClasses['form-editgrid-table-add'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.ref.addRow)) == null ? '' : __t) +
'">\n  <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\n  ' +
((__t = (ctx.t(ctx.component.addAnother || 'addAnother', { _userInput: !!ctx.component.addAnother }))) == null ? '' : __t) +
'\n</button>\n';
 } ;
__p += '\n';
return __p
}