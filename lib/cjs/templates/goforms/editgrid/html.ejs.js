Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="editgrid-listgroup divide-y divide-border rounded-lg border border-border\n    ' +
((__t = ( ctx.component.striped ? '[&_li:nth-child(odd)]:bg-muted/50' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.bordered ? '[&_li]:border [&_li]:border-border' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? '[&_li:hover]:bg-muted' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? '[&_li]:px-2 [&_li]:py-1' : '')) == null ? '' : __t) +
'\n    ">\n  ';
 if (ctx.header) { ;
__p += '\n  <li class="px-4 py-3 list-group-header">\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n  <li class="px-4 py-3" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n    ' +
((__t = (row)) == null ? '' : __t) +
'\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n    <div class="editgrid-actions">\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'save', { _userInput: !!ctx.component.saveRow }))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.component.removeRow) { ;
__p += '\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'cancel', { _userInput: !!ctx.component.removeRow }))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n    <div class="text-destructive">\n      <div class="editgrid-row-error text-sm text-destructive">\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n      </div>\n    </div>\n  </li>\n  ';
 }) ;
__p += '\n  ';
 if (ctx.footer) { ;
__p += '\n  <li class="px-4 py-3 list-group-footer">\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n</ul>\n';
return __p
}