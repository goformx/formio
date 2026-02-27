export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <div class="classic-pagination grid grid-cols-12 gap-4 justify-center border-b-0">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n      <div class="classic-pagination-page col-span-3\n          ' +
((__t = (ctx.currentPage < index ? ' disabled' : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage > index ? ' complete' : '')) == null ? '' : __t) +
'">\n        <div class="text-center classic-pagination-title">' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'</div>\n        ';
 if (ctx.panels.length > 1) { ;
__p += '\n          <div class="h-2 w-full overflow-hidden rounded-full bg-muted"><div class="h-full bg-primary transition-all"></div></div>\n        ';
 } ;
__p += '\n        <span ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link" class="classic-pagination-dot"></span>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n</nav>\n';
return __p
}