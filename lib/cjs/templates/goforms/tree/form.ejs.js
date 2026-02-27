Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.node.isRoot) { ;
__p += '\n  <div ref="root" class="px-4 py-3 border-b border-border">\n';
 } else { ;
__p += '\n  <li ref="node" class="px-4 py-3 border-b border-border tree__level tree__level_' +
((__t = ( ctx.odd ? 'odd' : 'even' )) == null ? '' : __t) +
'">\n';
 } ;
__p += '\n  ';
 if (ctx.content) { ;
__p += '\n    <div ref="content" class="tree__node-content">\n      ' +
((__t = ( ctx.content )) == null ? '' : __t) +
'\n    </div>\n  ';
 } ;
__p += '\n  ';
 if (ctx.childNodes && ctx.childNodes.length) { ;
__p += '\n    <ul ref="childNodes" class="tree__node-children divide-y divide-border">\n      ' +
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