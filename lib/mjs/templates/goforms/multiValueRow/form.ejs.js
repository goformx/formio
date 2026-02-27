export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<tr ref="row">\n  <td>\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n  </td>\n  ';
 if (!ctx.disabled) { ;
__p += '\n  <td>\n    <button type="button" class="inline-flex items-center justify-center gap-2 rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-secondary/80 transition-colors" ref="removeRow">\n      <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\n    </button>\n  </td>\n  ';
 } ;
__p += '\n</tr>\n';
return __p
}