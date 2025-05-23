Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../../cssClasses\'); %>\n<div class="' +
((__t = ( cssClasses['form-tree-view'] )) == null ? '' : __t) +
'">\n  ';
 ctx.values.forEach(function(value) { ;
__p += '\n    <div class="' +
((__t = ( cssClasses['form-tree-view-value'] )) == null ? '' : __t) +
'">\n      ' +
((__t = ( value )) == null ? '' : __t) +
'\n    </div>\n  ';
 }) ;
__p += '\n  <div class="' +
((__t = ( cssClasses['form-tree-view-actions'] )) == null ? '' : __t) +
'">\n    <div class="' +
((__t = ( cssClasses['form-tree-view-buttons'] )) == null ? '' : __t) +
'">\n      ';
 if (ctx.node.hasChildren) { ;
__p += '\n        <button ref="toggleNode" class="' +
((__t = ( cssClasses['form-tree-view-toggle'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t(ctx.node.collapsed ? 'expand' : 'collapse') )) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n      ';
 if (!ctx.readOnly) { ;
__p += '\n        <button ref="addChild" class="' +
((__t = ( cssClasses['form-tree-view-add'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('add') )) == null ? '' : __t) +
'</button>\n        <button ref="editNode" class="' +
((__t = ( cssClasses['form-tree-view-edit'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('edit') )) == null ? '' : __t) +
'</button>\n        <button ref="removeNode" class="' +
((__t = ( cssClasses['form-tree-view-remove'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('delete') )) == null ? '' : __t) +
'</button>\n        ';
 if (ctx.node.revertAvailable) { ;
__p += '\n          <button ref="revertNode" class="' +
((__t = ( cssClasses['form-tree-view-revert'] )) == null ? '' : __t) +
'">' +
((__t = ( ctx.t('revert') )) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}