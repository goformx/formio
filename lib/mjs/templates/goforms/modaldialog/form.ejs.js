export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="' +
((__t = ( cssClasses['form-modal'] )) == null ? '' : __t) +
'">\n  <div ref="overlay" class="' +
((__t = ( cssClasses['form-modal-backdrop'] )) == null ? '' : __t) +
'"></div>\n  <div ref="content" class="' +
((__t = ( cssClasses['form-modal-content'] )) == null ? '' : __t) +
'">\n    <button\n      ref="close"\n      type="button"\n      role="button"\n      class="' +
((__t = ( cssClasses['form-modal-close'] )) == null ? '' : __t) +
'">\n      ' +
((__t = (ctx.t('close'))) == null ? '' : __t) +
'\n    </button>\n    <div ref="inner" class="' +
((__t = ( cssClasses['form-modal-body'] )) == null ? '' : __t) +
'"></div>\n  </div>\n</div>\n';
return __p
}