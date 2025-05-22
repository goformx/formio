Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-builder-sidebar-group" ref="sidebar-group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\n  <div class="form-builder-sidebar-group-header" id="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\n    <button\n      class="form-builder-sidebar-group-toggle"\n      type="button"\n      aria-expanded="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\n      aria-controls="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n      ref="sidebar-anchor"\n    >\n      ' +
((__t = (ctx.t(ctx.group.title, { _userInput: true }))) == null ? '' : __t) +
'\n    </button>\n  </div>\n  <div\n    id="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n    class="form-builder-sidebar-group-content' +
((__t = (ctx.group.default ? ' show' : '')) == null ? '' : __t) +
'"\n    aria-labelledby="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n    ref="sidebar-group"\n  >\n    <div class="form-builder-sidebar-group-items" ref="sidebar-container">\n      ';
 if (ctx.group.componentOrder.length || ctx.subgroups.length) { ;
__p += '\n        ';
 !ctx.group.componentOrder || ctx.group.componentOrder.forEach(function(componentKey) { ;
__p += '\n          <span\n            ref="sidebar-component"\n            data-group="' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n            data-key="' +
((__t = (ctx.group.components[componentKey].key)) == null ? '' : __t) +
'"\n            data-type="' +
((__t = (ctx.group.components[componentKey].schema.type)) == null ? '' : __t) +
'"\n            class="form-builder-sidebar-component"\n            tabindex="' +
((__t = (ctx.keyboardActionsEnabled ? 0 : -1)) == null ? '' : __t) +
'"\n          >\n            ';
 if (ctx.group.components[componentKey].icon) { ;
__p += '\n              <i class="' +
((__t = (ctx.iconClass(ctx.group.components[componentKey].icon))) == null ? '' : __t) +
'"></i>\n            ';
 } ;
__p += '\n            ' +
((__t = (ctx.t(ctx.group.components[componentKey].title, { _userInput: true }))) == null ? '' : __t) +
'\n          </span>\n        ';
 }) ;
__p += '\n        ' +
((__t = (ctx.subgroups.join(''))) == null ? '' : __t) +
'\n      ';
 } else { ;
__p += '\n        <div class="form-builder-sidebar-no-matches">' +
((__t = (ctx.t('noMatchesFound'))) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}