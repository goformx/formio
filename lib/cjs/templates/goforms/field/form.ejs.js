Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n';
 if (!ctx.label.hidden && ctx.label.labelPosition !== 'bottom') { ;
__p += '\n  ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n';
 if (ctx.label.hidden && ctx.label.className && ctx.component.validate.required) { ;
__p += '\n  <label class="<%= cssClasses[\'form-field-hidden-label\'] %> ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'"></label>\n';
 } ;
__p += '\n\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n\n';
 if (!ctx.label.hidden && ctx.label.labelPosition === 'bottom') { ;
__p += '\n  ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n';
 if (ctx.component.description) { ;
__p += '\n  <div id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="<%= cssClasses[\'form-field-description\'] %>">' +
((__t = (ctx.t(ctx.component.description, { _userInput: true }))) == null ? '' : __t) +
'</div>\n';
 } ;
__p += '\n';
return __p
}