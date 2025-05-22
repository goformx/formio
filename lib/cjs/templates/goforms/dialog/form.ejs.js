Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-dialog\'] %>">\n  <div class="<%= cssClasses[\'form-dialog-overlay\'] %>" ref="dialogOverlay"></div>\n  <div class="<%= cssClasses[\'form-dialog-content\'] %>" ref="dialogContents" role="dialog">\n    <div ref="dialogContents"></div>\n    <button class="<%= cssClasses[\'form-dialog-close\'] %>" title="Close" aria-label="Close modal window." ref="dialogClose"></button>\n  </div>\n</div>\n';
return __p
}