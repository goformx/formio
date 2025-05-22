export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-builder-edit">\n  <div class="form-builder-edit-header">\n    <div class="form-builder-edit-title">\n      ' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'\n    </div>\n    <button type="button" class="form-builder-edit-close" ref="closeButton" aria-label="' +
((__t = (ctx.t('close'))) == null ? '' : __t) +
'">\n      <i class="' +
((__t = (ctx.iconClass('close'))) == null ? '' : __t) +
'"></i>\n    </button>\n  </div>\n  <div class="form-builder-edit-content">\n    <div class="form-builder-edit-tabs">\n      ';
 for (var tab in ctx.tabs) { ;
__p += '\n        <button \n          type="button" \n          class="form-builder-edit-tab ';
 if (tab === ctx.activeTab) { ;
__p += 'active';
 } ;
__p += '" \n          data-tab="' +
((__t = (tab)) == null ? '' : __t) +
'"\n          aria-selected="' +
((__t = (tab === ctx.activeTab ? 'true' : 'false')) == null ? '' : __t) +
'"\n          aria-controls="panel-' +
((__t = (tab)) == null ? '' : __t) +
'"\n        >\n          ' +
((__t = (ctx.tabs[tab].label)) == null ? '' : __t) +
'\n        </button>\n      ';
 } ;
__p += '\n    </div>\n    <div class="form-builder-edit-panel" id="panel-' +
((__t = (ctx.activeTab)) == null ? '' : __t) +
'">\n      ' +
((__t = (ctx.panel)) == null ? '' : __t) +
'\n    </div>\n  </div>\n  <div class="form-builder-edit-footer">\n    <button type="button" class="form-builder-edit-cancel" ref="cancelButton">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n    <button type="button" class="form-builder-edit-save" ref="saveButton">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n  </div>\n</div>\n';
return __p
}