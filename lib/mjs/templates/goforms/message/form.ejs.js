export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div id="e-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.key)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-message'] )) == null ? '' : __t) +
' ' +
((__t = ( cssClasses[`form-message-${ctx.level || 'error'}`] )) == null ? '' : __t) +
'">' +
((__t = (ctx.message)) == null ? '' : __t) +
'</div>\n';
return __p
}