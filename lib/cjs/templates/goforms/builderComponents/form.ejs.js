Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-builder-components">\n  ';
 for (var group in ctx.groups) { ;
__p += '\n    <div class="form-builder-component-group">\n      <div class="form-builder-component-group-title">\n        ' +
((__t = (ctx.groups[group].title)) == null ? '' : __t) +
'\n      </div>\n      <div class="form-builder-component-group-items">\n        ';
 for (var component in ctx.groups[group].components) { ;
__p += '\n          <div \n            class="form-builder-component-item" \n            data-type="' +
((__t = (ctx.groups[group].components[component].type)) == null ? '' : __t) +
'"\n            tabindex="0"\n            role="button"\n            aria-label="' +
((__t = (ctx.t('addComponent', { component: ctx.groups[group].components[component].label }))) == null ? '' : __t) +
'"\n          >\n            <i class="' +
((__t = (ctx.iconClass(ctx.groups[group].components[component].icon))) == null ? '' : __t) +
'"></i>\n            <span>' +
((__t = (ctx.groups[group].components[component].label)) == null ? '' : __t) +
'</span>\n          </div>\n        ';
 } ;
__p += '\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}