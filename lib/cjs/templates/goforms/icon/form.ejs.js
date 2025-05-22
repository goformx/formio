Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<i ref="' +
((__t = (ctx.ref)) == null ? '' : __t) +
'" class="<%= cssClasses[\'form-icon\'] %> ' +
((__t = (ctx.className)) == null ? '' : __t) +
'" style="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"><span class="<%= cssClasses[\'form-icon-content\'] %>">' +
((__t = (ctx.content)) == null ? '' : __t) +
'</span></i>\n';
return __p
}