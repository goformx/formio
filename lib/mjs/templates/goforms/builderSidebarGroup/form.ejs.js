export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="border-b border-border form-builder-panel" ref="group-panel-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\n  <div class="form-builder-group-header p-0" id="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\n    <h5 class="mb-0 mt-0 grid">\n      <button\n        class="inline-flex w-full items-center justify-start px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors builder-group-button"\n        type="button"\n        aria-expanded="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\n        aria-controls="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n        ref="sidebar-anchor"\n      >\n        ' +
((__t = (ctx.t(ctx.group.title, { _userInput: true }))) == null ? '' : __t) +
'\n      </button>\n    </h5>\n  </div>\n  <div\n    id="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n    class="overflow-hidden transition-all' +
((__t = (ctx.group.default ? '' : ' hidden')) == null ? '' : __t) +
'"\n    data-default="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\n    aria-labelledby="heading-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n    ref="sidebar-group"\n  >\n    <div id="group-container-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'" class="grid gap-1 no-drop p-2 w-full" ref="sidebar-container">\n      ';
 if (ctx.group.componentOrder.length || ctx.subgroups.length) { ;
__p += '\n        ';
 !ctx.group.componentOrder || ctx.group.componentOrder.forEach(function(componentKey) { ;
__p += '\n          <span\n            ref="sidebar-component"\n            data-group="' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\n            data-key="' +
((__t = (ctx.group.components[componentKey].key)) == null ? '' : __t) +
'"\n            data-type="' +
((__t = (ctx.group.components[componentKey].schema.type)) == null ? '' : __t) +
'"\n            class="inline-flex items-center justify-start gap-1 rounded-md border border-primary text-primary bg-transparent px-3 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors formcomponent drag-copy m-0"\n            tabindex="' +
((__t = (ctx.keyboardActionsEnabled ? 0 : -1)) == null ? '' : __t) +
'"\n          >\n            ';
 if (ctx.group.components[componentKey].icon) { ;
__p += '\n              <i class="' +
((__t = (ctx.iconClass(ctx.group.components[componentKey].icon))) == null ? '' : __t) +
' mr-1"></i>\n            ';
 } ;
__p += '\n            ' +
((__t = (ctx.t(ctx.group.components[componentKey].title, { _userInput: true }))) == null ? '' : __t) +
'\n          </span>\n        ';
 }) ;
__p += '\n        ' +
((__t = (ctx.subgroups.join(''))) == null ? '' : __t) +
'\n      ';
 } else { ;
__p += '\n        <div>' +
((__t = (ctx.t('noMatchesFound'))) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}