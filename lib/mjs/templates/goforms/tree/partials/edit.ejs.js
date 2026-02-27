export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="node-edit">\n  <div ref="nodeEdit">' +
((__t = ( ctx.children )) == null ? '' : __t) +
'</div>\n  ';
 if (!ctx.readOnly) { ;
__p += '\n    <div class="node-actions">\n      <button ref="saveNode" class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors saveNode">' +
((__t = ( ctx.t('save') )) == null ? '' : __t) +
'</button>\n      <button ref="cancelNode" class="inline-flex items-center justify-center gap-2 rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors cancelNode">' +
((__t = ( ctx.t('cancel') )) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}