export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" class="<%= cssClasses[\'form-wizard-header\'] %>">\n  <ul class="<%= cssClasses[\'form-wizard-navigation\'] %>">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li class="<%= cssClasses[\'form-wizard-navigation-item\'] %> ' +
((__t = (ctx.currentPage === index ? ' ' + cssClasses['form-wizard-navigation-item-active'] : '')) == null ? '' : __t) +
'">\n      <span class="<%= cssClasses[\'form-wizard-navigation-link\'] %>" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">\n        ' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'\n        ';
 if (panel.tooltip && ctx.currentPage === index) { ;
__p += '\n        <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="<%= cssClasses[\'form-wizard-navigation-tooltip\'] %>" data-tooltip="' +
((__t = (panel.tooltip)) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n      </span>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n</nav>\n';
return __p
}