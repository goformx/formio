Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<label id="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="text-sm font-medium ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'">\n  ' +
((__t = ( ctx.t(ctx.component.label, { _userInput: true }) )) == null ? '' : __t) +
'<span ref="modalLabelValue" class="sr-only">. ' +
((__t = ( ctx.component.type === 'signature' ? ctx.self.getValueAsString(ctx.previewText) : ctx.previewText )) == null ? '' : __t) +
'</span>\n</label><br>\n<span class="sr-only" ref="modalPreviewLiveRegion" aria-live="assertive"></span>\n<button\n  lang="en"\n  class="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background text-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent transition-colors open-modal-button ' +
((__t = (ctx.openModalBtnClasses || '')) == null ? '' : __t) +
'"\n  ref="openModal"\n  aria-labelledby="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n>\n  ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'\n</button>\n<div class="formio-errors text-sm text-destructive">\n  ' +
((__t = ( ctx.messages )) == null ? '' : __t) +
'\n</div>\n';
return __p
}