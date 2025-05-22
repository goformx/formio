export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav class="form-wizard-header" aria-label="Wizard navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-header">\n  <ul class="form-wizard-pages" role="tablist">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li class="form-wizard-page';
 if (ctx.currentPage === index) { ;
__p += ' form-wizard-page-active';
 } ;
__p += '" style="cursor: pointer;">\n      <button \n        tabindex="0" \n        data-index="' +
((__t = (index)) == null ? '' : __t) +
'" \n        role="tab" \n        class="form-wizard-page-link" \n        ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link"\n        aria-selected="' +
((__t = (ctx.currentPage === index ? 'true' : 'false')) == null ? '' : __t) +
'"\n      >\n        ' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'\n        ';
 if (panel.tooltip && ctx.currentPage === index) { ;
__p += '\n        <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="form-wizard-page-tooltip ' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'" data-tooltip="' +
((__t = (panel.tooltip)) == null ? '' : __t) +
'"></i>\n        ';
 } ;
__p += '\n      </button>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n</nav>\n';
return __p
}