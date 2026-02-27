Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'" class="divide-y divide-border rounded-lg border border-border builder-sidebar' +
((__t = (ctx.scrollEnabled ? ' builder-sidebar_scroll' : '')) == null ? '' : __t) +
'" ref="sidebar" role="tablist">\n  <input class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring builder-sidebar_search" type="search" ref="sidebar-search" placeholder="' +
((__t = (ctx.t('searchFields'))) == null ? '' : __t) +
'" />\n  <div ref="sidebar-groups">\n    ';
 ctx.groups.forEach(function(group) { ;
__p += '\n      ' +
((__t = ( group )) == null ? '' : __t) +
'\n    ';
 }) ;
__p += '\n  </div>\n</div>\n';
return __p
}