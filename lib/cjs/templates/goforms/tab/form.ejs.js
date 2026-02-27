Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="rounded-lg border border-border bg-card' +
((__t = ( ctx.component.verticalLayout ? ' flex flex-row' : '')) == null ? '' : __t) +
'">\n  <div class="border-b border-border">\n    <ul class="tab-component-tabs flex' +
((__t = ( ctx.component.verticalLayout ? ' flex-col border-b-0 border-r border-border' : '')) == null ? '' : __t) +
'" role="tablist">\n      ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n      <li class="' +
((__t = (ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" role="tab" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\n        <a\n            class="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border-b-2 border-transparent transition-colors' +
((__t = (ctx.currentTab === index ? ' border-primary text-foreground' : '')) == null ? '' : __t) +
'' +
((__t = ( ctx.component.verticalLayout ? ' border-b-0 border-r-2' : '')) == null ? '' : __t) +
'"\n            href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'"\n            ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'"\n        >\n          ' +
((__t = (ctx.t(tab.label, { _userInput: true }))) == null ? '' : __t) +
'\n        </a>\n      </li>\n      ';
 }) ;
__p += '\n    </ul>\n  </div>\n  ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n  <div\n    role="tabpanel"\n    class="p-4"\n    style="display: ' +
((__t = (ctx.currentTab === index ? 'block' : 'none')) == null ? '' : __t) +
'"\n    ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'"\n  >\n    ' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'\n  </div>\n  ';
 }) ;
__p += '\n</div>\n';
return __p
}