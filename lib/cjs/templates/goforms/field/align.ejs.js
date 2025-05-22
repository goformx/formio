Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-field-wrapper\'] %> <%= ctx.isRightPosition ? cssClasses[\'form-field-wrapper-reverse\'] : \'\' %>">\n  ';
 if (!ctx.label.hidden) { ;
__p += '\n    <div class="<%= cssClasses[\'form-field-label\'] %> <%= ctx.isRightAlign ? cssClasses[\'form-field-label-right\'] : \'\' %>" style="<%= ctx.labelStyles %>">\n      ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n    </div>\n  ';
 } ;
__p += '\n\n  ';
 if (ctx.label.hidden && ctx.label.className && ctx.component.validate.required) { ;
__p += '\n    <div class="<%= cssClasses[\'form-field-label\'] %> <%= ctx.isRightAlign ? cssClasses[\'form-field-label-right\'] : \'\' %>" style="<%= ctx.labelStyles %>">\n      <label class="<%= cssClasses[\'form-field-hidden-label\'] %> <%= ctx.label.className %>"></label>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="<%= cssClasses[\'form-field-content\'] %>" style="<%= ctx.contentStyles %>">\n    ' +
((__t = ( ctx.element )) == null ? '' : __t) +
'\n  </div>\n</div>\n\n';
 if (ctx.component.description) { ;
__p += '\n  <div class="<%= cssClasses[\'form-field-description\'] %>">\n    ' +
((__t = ( ctx.t(ctx.component.description, { _userInput: true }) )) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n';
return __p
}