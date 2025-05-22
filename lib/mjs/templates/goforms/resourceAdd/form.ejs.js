export default function(ctx) {
var __t, __p = '';
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-resource\'] %>">\n  <div class="<%= cssClasses[\'form-resource-content\'] %>">\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n  </div>\n  <div class="<%= cssClasses[\'form-resource-actions\'] %>">\n    <button class="<%= cssClasses[\'form-resource-add\'] %>" ref="addResource">\n      <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\n      ' +
((__t = (ctx.t(ctx.component.addResourceLabel || 'addResource', { _userInput: !!ctx.component.addResourceLabel }))) == null ? '' : __t) +
'\n    </button>\n  </div>\n</div>\n';
return __p
}