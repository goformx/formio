export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n<div\n  class="<%= cssClasses[\'form-signature\'] %>"\n  data-width="' +
((__t = (ctx.component.width)) == null ? '' : __t) +
'"\n  data-height="' +
((__t = (ctx.component.height)) == null ? '' : __t) +
'"\n  tabindex="' +
((__t = (ctx.component.tabindex || 0)) == null ? '' : __t) +
'"\n  ref="padBody"\n>\n  <a class="<%= cssClasses[\'form-signature-refresh\'] %>" ref="refresh">\n    <i class="' +
((__t = (ctx.iconClass('refresh'))) == null ? '' : __t) +
'"></i>\n  </a>\n  <canvas class="<%= cssClasses[\'form-signature-canvas\'] %>" data-height="' +
((__t = (ctx.component.height)) == null ? '' : __t) +
'" ref="canvas"></canvas>\n  ';
 if (ctx.required) { ;
__p += '\n  <span class="<%= cssClasses[\'form-signature-required\'] %>">\n    <i class="' +
((__t = (ctx.iconClass('asterisk'))) == null ? '' : __t) +
'"></i>\n  </span>\n  ';
 } ;
__p += '\n  <img class="<%= cssClasses[\'form-signature-image\'] %>" ref="signatureImage">\n</div>\n';
 if (ctx.component.footer) { ;
__p += '\n  <div class="<%= cssClasses[\'form-signature-footer\'] %>">\n    ' +
((__t = (ctx.t(ctx.component.footer, { _userInput: true }))) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n';
return __p
}