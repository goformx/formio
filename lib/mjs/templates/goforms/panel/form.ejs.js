export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="<%= cssClasses[\'form-panel\'] %>">\n  ';
 if (!ctx.label.hidden || ctx.builder || ctx.component.collapsible || ctx.component.tooltip) { ;
__p += '\n  <div class="<%= cssClasses[\'form-panel-header\'] %> <%= ctx.transform(\'class\', \'bg-\' + ctx.component.theme) %>"\n    ';
 if (ctx.component.collapsible) { ;
__p += '\n    tabindex="0"\n    ';
 } ;
__p += '\n    role="button"\n    aria-expanded="' +
((__t = (ctx.component.collapsible ? !ctx.collapsed : true)) == null ? '' : __t) +
'"\n    aria-controls="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ref="header"\n  >\n    <span class="<%= cssClasses[\'form-panel-title\'] %>">\n      ';
 if (ctx.component.collapsible) { ;
__p += '\n        <i class="<%= cssClasses[\'form-icon\'] %> ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus-square-o' : 'minus-square-o'))) == null ? '' : __t) +
'" data-title="Collapse Panel"></i>\n      ';
 } ;
__p += '\n      ';
 if (!ctx.label.hidden || ctx.builder) { ;
__p += '\n      ' +
((__t = (ctx.t(ctx.component.title, { _userInput: true }))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      ';
 if (ctx.component.tooltip) { ;
__p += '\n        <i ref="tooltip" tabindex="0" class="<%= cssClasses[\'form-label-tooltip\'] %> ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n      ';
 } ;
__p += '\n    </span>\n  </div>\n  ';
 } ;
__p += '\n  ';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\n  <div class="<%= cssClasses[\'form-panel-body\'] %>" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}