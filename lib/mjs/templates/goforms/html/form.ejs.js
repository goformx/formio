export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<' +
((__t = (ctx.tag)) == null ? '' : __t) +
' class="' +
((__t = ( cssClasses['form-html-element'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.component.className )) == null ? '' : __t) +
'" ref="html"\n  ';
 ctx.attrs.forEach(function(attr) { ;
__p += '\n    ' +
((__t = (attr.attr)) == null ? '' : __t) +
'="' +
((__t = (attr.value)) == null ? '' : __t) +
'"\n  ';
 }) ;
__p += '\n><span class="' +
((__t = ( cssClasses['form-html-element-content'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.content))) == null ? '' : __t) +
'</span>';
 if (!ctx.singleTags || ctx.singleTags.indexOf(ctx.tag) === -1) { ;
__p += '</' +
((__t = (ctx.tag)) == null ? '' : __t) +
'>';
 } ;
__p += '\n';
return __p
}