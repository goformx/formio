Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<tr ref="row" class="<%= cssClasses[\'form-multi-value-row\'] %>">\n  <td>\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n  </td>\n  ';
 if (!ctx.disabled) { ;
__p += '\n  <td>\n    <button type="button" class="<%= cssClasses[\'form-multi-value-remove\'] %>" ref="removeRow">\n      <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\n    </button>\n  </td>\n  ';
 } ;
__p += '\n</tr>\n';
return __p
}