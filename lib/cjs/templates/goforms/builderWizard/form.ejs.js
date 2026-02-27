Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio builder grid grid-cols-12 gap-0 formbuilder">\n  <div class="col-span-2 formcomponents">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="col-span-10 formarea">\n    <ol class="flex flex-wrap items-center gap-2 mb-4 wizard-pages">\n      ';
 ctx.pages.forEach(function(page, pageIndex) { ;
__p += '\n      <li>\n        <span title="' +
((__t = (page.title)) == null ? '' : __t) +
'" class="mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ';
 if (pageIndex === ctx.self.page) { ;
__p += 'bg-primary text-primary-foreground';
 } else { ;
__p += 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
 } ;
__p += ' wizard-page-label" ref="gotoPage">' +
((__t = (page.title)) == null ? '' : __t) +
'</span>\n      </li>\n      ';
 }) ;
__p += '\n      <li class="wizard-add-page">\n        <span title="' +
((__t = (ctx.t('createPage'))) == null ? '' : __t) +
'" class="mr-2 inline-flex items-center rounded-full bg-green-500/10 text-green-700 dark:text-green-400 px-2.5 py-0.5 text-xs font-semibold wizard-page-label" ref="addPage">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('page'))) == null ? '' : __t) +
'\n        </span>\n      </li>\n    </ol>\n    <div ref="form">\n      ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n    </div>\n  </div>\n</div>\n';
return __p
}