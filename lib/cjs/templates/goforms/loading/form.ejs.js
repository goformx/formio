Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-loading\'] %>">\n  <div class="<%= cssClasses[\'form-loading-overlay\'] %>">\n    <div class="<%= cssClasses[\'form-loading-spinner\'] %>"></div>\n    <div>' +
((__t = (ctx.t('loading'))) == null ? '' : __t) +
'...</div>\n  </div>\n</div>\n';
return __p
}