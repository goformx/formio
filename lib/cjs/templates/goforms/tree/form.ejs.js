Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n';
 if (ctx.node.isRoot) { ;
__p += '\n  <div ref="root" class="' +
((__t = ( cssClasses['form-tree-root'] )) == null ? '' : __t) +
'">\n';
 } else { ;
__p += '\n  <li ref="node" class="' +
((__t = ( cssClasses['form-tree-node'] )) == null ? '' : __t) +
' ' +
((__t = ( cssClasses['form-tree-level'] )) == null ? '' : __t) +
' ' +
((__t = ( cssClasses['form-tree-level-' + (ctx.odd ? 'odd' : 'even')] )) == null ? '' : __t) +
'">\n';
 } ;
__p += '\n  ';
 if (ctx.content) { ;
__p += '\n    <div ref="content" class="' +
((__t = ( cssClasses['form-tree-node-content'] )) == null ? '' : __t) +
'">\n      ' +
((__t = ( ctx.content )) == null ? '' : __t) +
'\n    </div>\n  ';
 } ;
__p += '\n  ';
 if (ctx.childNodes && ctx.childNodes.length) { ;
__p += '\n    <ul ref="childNodes" class="' +
((__t = ( cssClasses['form-tree-node-children'] )) == null ? '' : __t) +
'">\n      ' +
((__t = ( ctx.childNodes.join('') )) == null ? '' : __t) +
'\n    </ul>\n  ';
 } ;
__p += '\n';
 if (ctx.node.isRoot) { ;
__p += '\n  </div>\n';
 } else { ;
__p += '\n  </li>\n';
 } ;
__p += '\n';
return __p
}