Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-loader\'] %>">\n  <div class="<%= cssClasses[\'form-loader-content\'] %>">\n    <div class="<%= cssClasses[\'form-loader-spinner\'] %>"></div>\n  </div> \n</div>\n';
return __p
}