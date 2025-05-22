export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-container\'] %> ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform" novalidate>' +
((__t = (ctx.children)) == null ? '' : __t) +
'</div>\n';
return __p
}