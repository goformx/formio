export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid grid-cols-12 gap-4">\n  ';
 ctx.values.forEach(function(value) { ;
__p += '\n    <div class="col-span-2">\n      ' +
((__t = ( value )) == null ? '' : __t) +
'\n    </div>\n  ';
 }) ;
__p += '\n  <div class="col-span-3">\n    <div class="flex gap-1 ml-auto">\n      ';
 if (ctx.node.hasChildren) { ;
__p += '\n        <button ref="toggleNode" class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-accent transition-colors toggleNode">' +
((__t = ( ctx.t(ctx.node.collapsed ? 'expand' : 'collapse') )) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n      ';
 if (!ctx.readOnly) { ;
__p += '\n        <button ref="addChild" class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-accent transition-colors addChild">' +
((__t = ( ctx.t('add') )) == null ? '' : __t) +
'</button>\n        <button ref="editNode" class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-accent transition-colors editNode">' +
((__t = ( ctx.t('edit') )) == null ? '' : __t) +
'</button>\n        <button ref="removeNode" class="inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors removeNode">' +
((__t = ( ctx.t('delete') )) == null ? '' : __t) +
'</button>\n        ';
 if (ctx.node.revertAvailable) { ;
__p += '\n          <button ref="revertNode" class="inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-destructive/90 transition-colors revertNode">' +
((__t = ( ctx.t('revert') )) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}