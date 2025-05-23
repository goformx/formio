Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<% const cssClasses = require(\'../cssClasses\'); %>\n<div class="' +
((__t = ( cssClasses['form-tab'] )) == null ? '' : __t) +
'' +
((__t = ( ctx.component.verticalLayout ? ' ' + cssClasses['form-tab-vertical'] : '')) == null ? '' : __t) +
'">\n  <div class="' +
((__t = ( cssClasses['form-tab-header'] )) == null ? '' : __t) +
'">\n    <ul class="' +
((__t = ( cssClasses['form-tab-navigation'] )) == null ? '' : __t) +
'' +
((__t = ( ctx.component.verticalLayout ? ' ' + cssClasses['form-tab-navigation-vertical'] : '')) == null ? '' : __t) +
'" role="tablist">\n      ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n      <li class="' +
((__t = ( cssClasses['form-tab-item'] )) == null ? '' : __t) +
'' +
((__t = (ctx.currentTab === index ? ' ' + cssClasses['form-tab-item-active'] : '')) == null ? '' : __t) +
'" role="tab" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\n        <a\n            class="' +
((__t = ( cssClasses['form-tab-link'] )) == null ? '' : __t) +
'' +
((__t = (ctx.currentTab === index ? ' ' + cssClasses['form-tab-link-active'] : '')) == null ? '' : __t) +
'' +
((__t = ( ctx.component.verticalLayout ? ' ' + cssClasses['form-tab-link-vertical'] : '')) == null ? '' : __t) +
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
__p += '\n  <div\n    role="tabpanel"\n    class="' +
((__t = ( cssClasses['form-tab-panel'] )) == null ? '' : __t) +
'"\n    style="display: ' +
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