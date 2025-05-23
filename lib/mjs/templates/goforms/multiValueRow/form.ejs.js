export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<tr ref="row" class="' +
((__t = ( cssClasses['form-multi-value-row'] )) == null ? '' : __t) +
'">\n  <td>\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n  </td>\n  ';
 if (!ctx.disabled) { ;
__p += '\n  <td>\n    <button type="button" class="' +
((__t = ( cssClasses['form-multi-value-remove'] )) == null ? '' : __t) +
'" ref="removeRow">\n      <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\n    </button>\n  </td>\n  ';
 } ;
__p += '\n</tr>\n';
return __p
}