export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = ( ctx.cssClasses['form-tree-edit'] )) == null ? '' : __t) +
'">\n  <div ref="nodeEdit" class="' +
((__t = ( ctx.cssClasses['form-tree-edit-content'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.children )) == null ? '' : __t) +
'</div>\n  ';
 if (!ctx.readOnly) { ;
__p += '\n    <div class="' +
((__t = ( ctx.cssClasses['form-tree-edit-actions'] )) == null ? '' : __t) +
'">\n      <button ref="saveNode" class="' +
((__t = ( ctx.cssClasses['form-tree-edit-save'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('save') )) == null ? '' : __t) +
'</button>\n      <button ref="cancelNode" class="' +
((__t = ( ctx.cssClasses['form-tree-edit-cancel'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('cancel') )) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}