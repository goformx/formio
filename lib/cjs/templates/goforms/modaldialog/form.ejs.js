Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-modal\'] %>">\n  <div ref="overlay" class="<%= cssClasses[\'form-modal-backdrop\'] %>"></div>\n  <div ref="content" class="<%= cssClasses[\'form-modal-content\'] %>">\n    <button\n      ref="close"\n      type="button"\n      role="button"\n      class="<%= cssClasses[\'form-modal-close\'] %>">\n      ' +
((__t = (ctx.t('close'))) == null ? '' : __t) +
'\n    </button>\n    <div ref="inner" class="<%= cssClasses[\'form-modal-body\'] %>"></div>\n  </div>\n</div>\n';
return __p
}