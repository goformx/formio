export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-wizard ' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\n  <div class="form-wizard-container">\n    ';
 if (ctx.wizardHeaderType === 'wizardHeaderVertical') { ;
__p += '\n    <div class="form-wizard-vertical">\n      ';
 if (ctx.wizardHeaderLocation !== 'right') { ;
__p += '\n      <div class="form-wizard-sidebar">\n        ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n      </div>\n      ';
 } ;
__p += '\n      <div class="form-wizard-content" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n      </div>\n      ';
 if (ctx.wizardHeaderLocation === 'right') { ;
__p += '\n      <div class="form-wizard-sidebar">\n        ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n      </div>\n      ';
 } ;
__p += '\n    </div>\n    <div class="form-wizard-navigation-container';
 if (ctx.wizardHeaderLocation === 'right') { ;
__p += ' form-wizard-navigation-right';
 } ;
__p += '">\n      ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n    </div>\n    ';
 } else { ;
__p += '\n    <div class="form-wizard-horizontal">\n      ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n      <div class="form-wizard-content" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n      </div>\n      ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n';
return __p
}