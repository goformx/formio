Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p +=
((__t = (ctx.element)) == null ? '' : __t) +
'\n<div\n  class="' +
((__t = ( ctx.cssClasses['form-signature'] )) == null ? '' : __t) +
'"\n  data-width="' +
((__t = (ctx.component.width)) == null ? '' : __t) +
'"\n  data-height="' +
((__t = (ctx.component.height)) == null ? '' : __t) +
'"\n  tabindex="' +
((__t = (ctx.component.tabindex || 0)) == null ? '' : __t) +
'"\n  ref="padBody"\n>\n  <a class="' +
((__t = ( ctx.cssClasses['form-signature-refresh'] )) == null ? '' : __t) +
'" ref="refresh">\n    <i class="' +
((__t = (ctx.iconClass('refresh'))) == null ? '' : __t) +
'"></i>\n  </a>\n  <canvas class="' +
((__t = ( ctx.cssClasses['form-signature-canvas'] )) == null ? '' : __t) +
'" data-height="' +
((__t = (ctx.component.height)) == null ? '' : __t) +
'" ref="canvas"></canvas>\n  ';
 if (ctx.required) { ;
__p += '\n  <span class="' +
((__t = ( ctx.cssClasses['form-signature-required'] )) == null ? '' : __t) +
'">\n    <i class="' +
((__t = (ctx.iconClass('asterisk'))) == null ? '' : __t) +
'"></i>\n  </span>\n  ';
 } ;
__p += '\n  <img class="' +
((__t = ( ctx.cssClasses['form-signature-image'] )) == null ? '' : __t) +
'" ref="signatureImage">\n</div>\n';
 if (ctx.component.footer) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-signature-footer'] )) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.t(ctx.component.footer, { _userInput: true }))) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n';
return __p
}