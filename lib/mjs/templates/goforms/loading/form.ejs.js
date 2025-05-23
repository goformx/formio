export default function(ctx) {
var __t, __p = '';
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-loading'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( ctx.cssClasses['form-loading-overlay'] )) == null ? '' : __t) +
'">\n    <div class="' +
((__t = ( ctx.cssClasses['form-loading-spinner'] )) == null ? '' : __t) +
'"></div>\n    <div>' +
((__t = (ctx.t('loading'))) == null ? '' : __t) +
'...</div>\n  </div>\n</div>\n';
return __p
}