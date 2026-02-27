export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\n    <div style="position: relative;">\n        ';
 if (ctx.wizardHeaderType === 'wizardHeaderVertical') { ;
__p += '\n        <div class="grid grid-cols-12 gap-4">\n            ';
 if (ctx.wizardHeaderLocation !== 'right') { ;
__p += '\n            <div class="col-span-2">\n                ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n            </div>\n            ';
 } ;
__p += '\n            <div class="wizard-page col-span-10" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n                ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n            </div>\n            ';
 if (ctx.wizardHeaderLocation === 'right') { ;
__p += '\n            <div class="col-span-2">\n                ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n            </div>\n            ';
 } ;
__p += '\n        </div>\n        <div class="col-start-3 col-span-10 ' +
((__t = (ctx.wizardHeaderLocation === 'right' ? '' : '')) == null ? '' : __t) +
'">\n            ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n        </div>\n        ';
 } else { ;
__p += '\n        ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n        <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n            ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n        </div>\n        ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n    </div>\n</div>\n';
return __p
}