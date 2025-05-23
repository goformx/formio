Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="' +
((__t = ( cssClasses['form-well'] )) == null ? '' : __t) +
'">\n  <div ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-well-content'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}