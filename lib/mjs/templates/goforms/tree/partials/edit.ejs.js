export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-tree-edit\'] %>">\n  <div ref="nodeEdit" class="<%= cssClasses[\'form-tree-edit-content\'] %>">' +
((__t = ( ctx.children )) == null ? '' : __t) +
'</div>\n  ';
 if (!ctx.readOnly) { ;
__p += '\n    <div class="<%= cssClasses[\'form-tree-edit-actions\'] %>">\n      <button ref="saveNode" class="<%= cssClasses[\'form-tree-edit-save\'] %>">' +
((__t = ( ctx.t('save') )) == null ? '' : __t) +
'</button>\n      <button ref="cancelNode" class="<%= cssClasses[\'form-tree-edit-cancel\'] %>">' +
((__t = ( ctx.t('cancel') )) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}