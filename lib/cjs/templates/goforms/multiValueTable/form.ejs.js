Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="' +
((__t = ( ctx.cssClasses['form-multi-value-table'] )) == null ? '' : __t) +
'">\n  <tbody>\n  ' +
((__t = (ctx.rows)) == null ? '' : __t) +
'\n  ';
 if (!ctx.disabled) { ;
__p += '\n  <tr>\n    <td colspan="2">\n      <button class="' +
((__t = ( ctx.cssClasses['form-multi-value-add'] )) == null ? '' : __t) +
'" ref="addButton"><i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.addAnother, { _userInput: true }))) == null ? '' : __t) +
'</button>\n    </td>\n  </tr>\n  ';
 } ;
__p += '\n  </tbody>\n</table>\n';
return __p
}