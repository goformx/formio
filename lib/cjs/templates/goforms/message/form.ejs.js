Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div id="e-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.key)) == null ? '' : __t) +
'" class="<%= cssClasses[\'form-message\'] %> <%= cssClasses[`form-message-${ctx.level || \'error\'}`] %>">' +
((__t = (ctx.message)) == null ? '' : __t) +
'</div>\n';
return __p
}