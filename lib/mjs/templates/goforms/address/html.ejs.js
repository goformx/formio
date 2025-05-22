export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-address-value" ref="value">\n  ';
 if (ctx.displayValue) { ;
__p += '\n    ' +
((__t = (ctx.displayValue)) == null ? '' : __t) +
'\n  ';
 } else { ;
__p += '\n    <span class="form-address-empty">-</span>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}