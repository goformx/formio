export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n  ref="button"\n  class="form-button form-button-' +
((__t = (ctx.component.theme || 'default')) == null ? '' : __t) +
' form-button-' +
((__t = (ctx.component.size || 'md')) == null ? '' : __t);
 if (ctx.component.block) { ;
__p += ' form-button-block';
 } ;
__p += ' ' +
((__t = (ctx.component.className || '')) == null ? '' : __t) +
'"\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.description) { ;
__p += '\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n>\n  ';
 if (ctx.component.leftIcon) { ;
__p += '<span class="form-button-icon form-button-icon-left ' +
((__t = (ctx.component.leftIcon)) == null ? '' : __t) +
'"></span>&nbsp;';
 } ;
__p += '\n  <span class="form-button-content">' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</span>\n  ';
 if (ctx.component.tooltip) { ;
__p += '\n    <i ref="tooltip" class="form-button-tooltip ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.rightIcon) { ;
__p += '&nbsp;<span class="form-button-icon form-button-icon-right ' +
((__t = (ctx.component.rightIcon)) == null ? '' : __t) +
'"></span>';
 } ;
__p += '\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n<div ref="buttonMessageContainer">\n  <span class="form-button-message" ref="buttonMessage"></span>\n</div>\n';
return __p
}