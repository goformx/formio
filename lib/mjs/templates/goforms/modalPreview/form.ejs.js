export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<label id="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="' +
((__t = ( cssClasses['form-label'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'">\n  ' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'<span ref="modalLabelValue" class="visually-hidden">. ' +
((__t = ( ctx.component.type === 'signature' ? ctx.self.getValueAsString(ctx.previewText) : ctx.previewText )) == null ? '' : __t) +
'</span>\n</label><br>\n<span class="visually-hidden" ref="modalPreviewLiveRegion" aria-live="assertive"></span>\n<button\n  lang="en"\n  class="' +
((__t = ( cssClasses['form-modal-preview-button'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.openModalBtnClasses || '')) == null ? '' : __t) +
'"\n  ref="openModal"\n  aria-labelledby="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n>\n  ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'\n</button>\n<div class="' +
((__t = ( cssClasses['form-message'] )) == null ? '' : __t) +
' ' +
((__t = ( cssClasses['form-message-error'] )) == null ? '' : __t) +
'">\n  ' +
((__t = ( ctx.messages )) == null ? '' : __t) +
'\n</div>\n';
return __p
}