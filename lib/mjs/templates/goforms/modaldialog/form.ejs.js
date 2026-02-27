export default function(ctx) {
var __t, __p = '';
__p += '<div class="formio-dialog formio-dialog-theme-default formio-modaledit-dialog">\n  <div ref="overlay" class="formio-dialog-overlay"></div>\n  <div ref="content" class="formio-modaledit-content">\n    <button\n      ref="close"\n      type="button"\n      role="button"\n      class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-2 py-1 text-xs font-medium shadow-sm hover:bg-primary/90 transition-colors formio-modaledit-close">\n      ' +
((__t = (ctx.t('close'))) == null ? '' : __t) +
'\n    </button>\n    <div ref="inner" class="reset-margins"></div>\n  </div>\n</div>\n';
return __p
}