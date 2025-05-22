Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="form-builder-sidebar" ref="sidebar">\n  <div class="form-builder-sidebar-header">\n    <input \n      type="search" \n      class="form-builder-sidebar-search" \n      ref="search" \n      placeholder="' +
((__t = (ctx.t('searchFields'))) == null ? '' : __t) +
'"\n      aria-label="' +
((__t = (ctx.t('searchFields'))) == null ? '' : __t) +
'"\n    />\n  </div>\n  <div class="form-builder-sidebar-content" ref="content">\n    ' +
((__t = (ctx.content)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}