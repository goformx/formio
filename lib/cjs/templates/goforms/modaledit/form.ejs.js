Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div ref="container" class="' +
((__t = ( cssClasses['form-modal'] )) == null ? '' : __t) +
'">\n  <button\n    ref="edit"\n    type="button"\n    role="button"\n    class="' +
((__t = ( cssClasses['form-modal-edit'] )) == null ? '' : __t) +
'">\n    <i class="' +
((__t = (ctx.iconClass('edit'))) == null ? '' : __t) +
'"></i>\n  </button>\n  <div ref="input" class="' +
((__t = ( cssClasses['form-modal-body'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.content)) == null ? '' : __t) +
'</div>\n</div>\n';
return __p
}