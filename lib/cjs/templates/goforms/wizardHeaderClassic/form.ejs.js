Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" class="' +
((__t = ( cssClasses['form-wizard-header'] )) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( cssClasses['form-wizard-navigation-container'] )) == null ? '' : __t) +
'">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n      <div class="' +
((__t = ( cssClasses['form-wizard-page'] )) == null ? '' : __t) +
' \n          ' +
((__t = (ctx.currentPage < index ? ' ' + cssClasses['form-wizard-page-disabled'] : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage === index ? ' ' + cssClasses['form-wizard-page-active'] : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage > index ? ' ' + cssClasses['form-wizard-page-complete'] : '')) == null ? '' : __t) +
'">\n        <div class="' +
((__t = ( cssClasses['form-wizard-page-title'] )) == null ? '' : __t) +
'">' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'</div>\n        ';
 if (ctx.panels.length > 1) { ;
__p += '\n          <div class="' +
((__t = ( cssClasses['form-wizard-page-progress'] )) == null ? '' : __t) +
'">\n            <div class="' +
((__t = ( cssClasses['form-wizard-page-progress-bar'] )) == null ? '' : __t) +
'"></div>\n          </div>\n        ';
 } ;
__p += ' \n        <span ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link" class="' +
((__t = ( cssClasses['form-wizard-page-dot'] )) == null ? '' : __t) +
'"></span>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n</nav>\n';
return __p
}