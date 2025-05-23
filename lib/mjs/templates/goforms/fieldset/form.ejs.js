export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="' +
((__t = ( ctx.cssClasses['form-fieldset'] )) == null ? '' : __t) +
'">\n  ';
 if (ctx.component.legend) { ;
__p += '\n  <legend ref="header" class="' +
((__t = ( ctx.cssClasses['form-fieldset-legend'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.component.collapsible ? cssClasses['form-fieldset-legend-clickable'] : '')) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.t(ctx.component.legend, { _userInput: true }))) == null ? '' : __t) +
'\n    ';
 if (ctx.component.tooltip) { ;
__p += '\n      <i ref="tooltip" tabindex="0" class="' +
((__t = ( ctx.cssClasses['form-fieldset-tooltip'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n    ';
 } ;
__p += '\n  </legend>\n  ';
 } ;
__p += '\n  ';
 if (!ctx.collapsed) { ;
__p += '\n  <div class="' +
((__t = ( ctx.cssClasses['form-fieldset-body'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n</fieldset>\n';
return __p
}