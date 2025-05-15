Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n  ref="button"\n  class="btn ' +
((__t = (ctx.transform('theme', ctx.component.theme))) == null ? '' : __t) +
' ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'"\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n>\n';
 if (ctx.component.leftIcon) { ;
__p += '<i class="' +
((__t = (ctx.iconClass(ctx.component.leftIcon))) == null ? '' : __t) +
'"></i>&nbsp;';
 } ;
__p += '\n' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\n';
 if (ctx.component.tooltip) { ;
__p += '\n  <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-secondary" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n';
 } ;
__p += '\n';
 if (ctx.component.rightIcon) { ;
__p += '&nbsp;<i class="' +
((__t = (ctx.iconClass(ctx.component.rightIcon))) == null ? '' : __t) +
'"></i>';
 } ;
__p += '\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n<div ref="buttonMessageContainer">\n  <span class="text-secondary" ref="buttonMessage"></span>\n</div> ';
return __p
}