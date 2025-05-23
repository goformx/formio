Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-modal'] )) == null ? '' : __t) +
'">\n  <div ref="overlay" class="' +
((__t = ( ctx.cssClasses['form-modal-backdrop'] )) == null ? '' : __t) +
'"></div>\n  <div ref="content" class="' +
((__t = ( ctx.cssClasses['form-modal-content'] )) == null ? '' : __t) +
'">\n    <button\n      ref="close"\n      type="button"\n      role="button"\n      class="' +
((__t = ( ctx.cssClasses['form-modal-close'] )) == null ? '' : __t) +
'">\n      ' +
((__t = (ctx.t('close'))) == null ? '' : __t) +
'\n    </button>\n    <div ref="inner" class="' +
((__t = ( ctx.cssClasses['form-modal-body'] )) == null ? '' : __t) +
'"></div>\n  </div>\n</div>\n';
return __p
}