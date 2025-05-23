export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<i ref="' +
((__t = (ctx.ref)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-icon'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.className)) == null ? '' : __t) +
'" style="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"><span class="' +
((__t = ( cssClasses['form-icon-content'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.content)) == null ? '' : __t) +
'</span></i>\n';
return __p
}