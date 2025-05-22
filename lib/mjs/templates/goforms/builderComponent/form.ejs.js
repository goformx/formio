export default function(ctx) {
var __t, __p = '';
__p += '<div class="form-builder-component" ref="component">\n  <div class="form-builder-component-header">\n    <div class="form-builder-component-title">\n      ' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'\n    </div>\n    <div class="form-builder-component-actions">\n      <button type="button" class="form-builder-component-edit" ref="editButton" aria-label="' +
((__t = (ctx.t('edit'))) == null ? '' : __t) +
'">\n        <i class="' +
((__t = (ctx.iconClass('edit'))) == null ? '' : __t) +
'"></i>\n      </button>\n      <button type="button" class="form-builder-component-remove" ref="removeButton" aria-label="' +
((__t = (ctx.t('remove'))) == null ? '' : __t) +
'">\n        <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\n      </button>\n    </div>\n  </div>\n  <div class="form-builder-component-content">\n    ' +
((__t = (ctx.component.content)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}