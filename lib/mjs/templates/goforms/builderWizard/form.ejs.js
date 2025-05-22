export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-builder-wizard">\n  <div class="form-builder-wizard-sidebar">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="form-builder-wizard-main">\n    <ol class="form-builder-wizard-pages">\n      ';
 ctx.pages.forEach(function(page, pageIndex) { ;
__p += '\n      <li>\n        <span title="' +
((__t = (page.title)) == null ? '' : __t) +
'" class="form-builder-wizard-page-label';
 if (pageIndex === ctx.self.page) { ;
__p += ' active';
 } ;
__p += '" ref="gotoPage">' +
((__t = (page.title)) == null ? '' : __t) +
'</span>\n      </li>\n      ';
 }) ;
__p += '\n      <li class="form-builder-wizard-add-page">\n        <span title="' +
((__t = (ctx.t('createPage'))) == null ? '' : __t) +
'" class="form-builder-wizard-page-label add" ref="addPage">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('page'))) == null ? '' : __t) +
'\n        </span>\n      </li>\n    </ol>\n    <div class="form-builder-wizard-form" ref="form">\n      ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n    </div>\n  </div>\n</div>\n';
return __p
}