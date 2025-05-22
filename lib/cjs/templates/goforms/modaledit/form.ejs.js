Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div ref="container" class="<%= cssClasses[\'form-modal\'] %>">\n  <button\n    ref="edit"\n    type="button"\n    role="button"\n    class="<%= cssClasses[\'form-modal-edit\'] %>">\n    <i class="' +
((__t = (ctx.iconClass('edit'))) == null ? '' : __t) +
'"></i>\n  </button>\n  <div ref="input" class="<%= cssClasses[\'form-modal-body\'] %>">' +
((__t = (ctx.content)) == null ? '' : __t) +
'</div>\n</div>\n';
return __p
}