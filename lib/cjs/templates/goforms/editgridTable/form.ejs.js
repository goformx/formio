Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="editgrid-table-container">\n  <div class="table-responsive">\n    <table class="w-full text-sm\n      ' +
((__t = ( ctx.component.striped ? '[&_tbody_tr:nth-child(odd)]:bg-muted/50' : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.bordered ? 'border border-border [&_th]:border [&_th]:border-border [&_td]:border [&_td]:border-border' : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.hover ? '[&_tbody_tr]:hover:bg-muted/50' : '')) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.condensed ? '[&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1' : '')) == null ? '' : __t) +
'\n    ">\n      ';
 if (ctx.header) { ;
__p += '\n      <thead class="editgrid-table-head">\n        ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n      </thead>\n      ';
 } ;
__p += '\n      <tbody class="editgrid-table-body">\n        ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n        <tr ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n          ' +
((__t = (row)) == null ? '' : __t) +
'\n          ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n            <td class="editgrid-table-column">\n              <div class="editgrid-actions">\n                <button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'save', { _userInput: !!ctx.component.saveRow }))) == null ? '' : __t) +
'</button>\n                ';
 if (ctx.component.removeRow) { ;
__p += '\n                <button class="inline-flex items-center justify-center gap-2 rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'cancel', { _userInput: !!ctx.component.removeRow }))) == null ? '' : __t) +
'</button>\n                ';
 } ;
__p += '\n              </div>\n            </td>\n          ';
 } ;
__p += '\n          ';
 if (ctx.errors[rowIndex]) { ;
__p += '\n          <td class="editgrid-table-column">\n            <div class="text-destructive">\n              <div class="editgrid-row-error text-sm text-destructive">\n                ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n              </div>\n            </div>\n          </td>\n          ';
 } ;
__p += '\n        </tr>\n        ';
 }) ;
__p += '\n      </tbody>\n      ';
 if (ctx.footer) { ;
__p += '\n      <tfoot>\n        <tr>\n          ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n        </tr>\n      <tfoot>\n      ';
 } ;
__p += '\n    </table>\n  </div>\n</div>\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\n<button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors" ref="' +
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