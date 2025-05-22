export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-well\'] %>">\n  <div ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'" class="<%= cssClasses[\'form-well-content\'] %>">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}