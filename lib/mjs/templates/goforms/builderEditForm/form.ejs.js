export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid grid-cols-12 gap-4">\n  <div class="col-span-6">\n    <p class="text-lg font-medium">' +
((__t = (ctx.t(ctx.componentInfo.title, { _userInput: true }))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('component'))) == null ? '' : __t) +
'</p>\n  </div>\n  ';
 if (ctx.helplinks) { ;
__p += '\n  <div class="col-span-6">\n    <div class="float-right mr-5 mt-2.5">\n      <a href="' +
((__t = (ctx.t(ctx.helplinks + ctx.componentInfo.documentation))) == null ? '' : __t) +
'" target="_blank" rel="noopener noreferrer">\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('help'))) == null ? '' : __t) +
'\n      </a>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n<div class="grid grid-cols-12 gap-4">\n  <div class="col component-edit-tabs ' +
((__t = ( (ctx.preview && ctx.showPreview) ? 'col-span-6' : 'col-span-12' )) == null ? '' : __t) +
'">\n    <div ref="editForm">\n        ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\n    </div>\n    ';
 if (!ctx.showPreview) { ;
__p += '\n    <div class="mt-2.5">\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-700 transition-colors mr-2.5" ref="saveButton">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-secondary/80 transition-colors mr-2.5" ref="cancelButton">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors" ref="removeButton">' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.preview) { ;
__p += '\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors float-right" ref="previewButton">' +
((__t = (ctx.t('showPreview'))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n  </div>\n  ';
 if (ctx.showPreview && ctx.preview) { ;
__p += '\n  <div class="col-span-6">\n    <div class="rounded-lg border border-border bg-card shadow-sm panel preview-panel">\n      <div class="border-b border-border px-4 py-3">\n        <h4 class="text-sm font-semibold mb-0">' +
((__t = (ctx.t('preview'))) == null ? '' : __t) +
'</h4>\n      </div>\n      <div class="p-4">\n        <div class="component-preview" ref="preview">\n          ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\n        </div>\n      </div>\n    </div>\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\n    <div class="rounded-lg border border-border bg-muted p-4 formio-settings-help">\n      ' +
((__t = ( ctx.t(ctx.componentInfo.help) )) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n    <div class="mt-2.5">\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-700 transition-colors mr-2.5" ref="saveButton">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-secondary/80 transition-colors mr-2.5" ref="cancelButton">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors" ref="removeButton">' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'</button>\n      <button class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors float-right" ref="previewButton">' +
((__t = (ctx.t('hidePreview'))) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}