Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-sidebar'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-area'] )) == null ? '' : __t) +
'" ref="form">\n    <div class="' +
((__t = ( ctx.cssClasses['form-pdf-builder-dropzone'] )) == null ? '' : __t) +
'" ref="iframeDropzone"></div>\n    ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}