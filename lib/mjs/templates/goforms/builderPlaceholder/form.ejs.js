export default function(ctx) {
var __t, __p = '';
__p += '<div\n  class="drag-and-drop-alert rounded-md border border-blue-500/50 bg-blue-500/10 px-4 py-3 text-sm text-blue-700 dark:text-blue-400 no-drag"\n  style="text-align:center;"\n  role="alert"\n  data-noattach="true"\n  data-position="' +
((__t = (ctx.position)) == null ? '' : __t) +
'"\n>\n  ' +
((__t = (ctx.t('dragAndDropComponent'))) == null ? '' : __t) +
'\n</div>\n';
return __p
}