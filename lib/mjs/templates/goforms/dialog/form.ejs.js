export default function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-dialog'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( ctx.cssClasses['form-dialog-overlay'] )) == null ? '' : __t) +
'" ref="dialogOverlay"></div>\n  <div class="' +
((__t = ( ctx.cssClasses['form-dialog-content'] )) == null ? '' : __t) +
'" ref="dialogContents" role="dialog">\n    <div ref="dialogContents"></div>\n    <button class="' +
((__t = ( ctx.cssClasses['form-dialog-close'] )) == null ? '' : __t) +
'" title="Close" aria-label="Close modal window." ref="dialogClose"></button>\n  </div>\n</div>\n';
return __p
}