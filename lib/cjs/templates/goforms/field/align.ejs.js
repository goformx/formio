Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="' +
((__t = ( cssClasses['form-field-wrapper'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.isRightPosition ? cssClasses['form-field-wrapper-reverse'] : '' )) == null ? '' : __t) +
'">\n  ';
 if (!ctx.label.hidden) { ;
__p += '\n    <div class="' +
((__t = ( cssClasses['form-field-label'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.isRightAlign ? cssClasses['form-field-label-right'] : '' )) == null ? '' : __t) +
'" style="' +
((__t = ( ctx.labelStyles )) == null ? '' : __t) +
'">\n      ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n    </div>\n  ';
 } ;
__p += '\n\n  ';
 if (ctx.label.hidden && ctx.label.className && ctx.component.validate.required) { ;
__p += '\n    <div class="' +
((__t = ( cssClasses['form-field-label'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.isRightAlign ? cssClasses['form-field-label-right'] : '' )) == null ? '' : __t) +
'" style="' +
((__t = ( ctx.labelStyles )) == null ? '' : __t) +
'">\n      <label class="' +
((__t = ( cssClasses['form-field-hidden-label'] )) == null ? '' : __t) +
' ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'"></label>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="' +
((__t = ( cssClasses['form-field-content'] )) == null ? '' : __t) +
'" style="' +
((__t = ( ctx.contentStyles )) == null ? '' : __t) +
'">\n    ' +
((__t = ( ctx.element )) == null ? '' : __t) +
'\n  </div>\n</div>\n\n';
 if (ctx.component.description) { ;
__p += '\n  <div class="' +
((__t = ( cssClasses['form-field-description'] )) == null ? '' : __t) +
'">\n    ' +
((__t = ( ctx.t(ctx.component.description, { _userInput: true }) )) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n';
return __p
}