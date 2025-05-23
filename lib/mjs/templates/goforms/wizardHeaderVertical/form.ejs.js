export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" class="' +
((__t = ( ctx.cssClasses['form-wizard-header'] )) == null ? '' : __t) +
'">\n  <ul class="' +
((__t = ( ctx.cssClasses['form-wizard-navigation'] )) == null ? '' : __t) +
'">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li class="' +
((__t = ( ctx.cssClasses['form-wizard-navigation-item'] )) == null ? '' : __t) +
' ' +
((__t = (ctx.currentPage === index ? ' ' + cssClasses['form-wizard-navigation-item-active'] : '')) == null ? '' : __t) +
'">\n      <span class="' +
((__t = ( ctx.cssClasses['form-wizard-navigation-link'] )) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">\n        ' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'\n        ';
 if (panel.tooltip && ctx.currentPage === index) { ;
__p += '\n        <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="' +
((__t = ( ctx.cssClasses['form-wizard-navigation-tooltip'] )) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (panel.tooltip)) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n      </span>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n</nav>\n';
return __p
}