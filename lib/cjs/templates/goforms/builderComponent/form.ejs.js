Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="builder-component" ref="dragComponent" tabindex="-1">\n  ';
 if (!ctx.disableBuilderActions) { ;
__p += '\n    <div class="component-btn-group" data-noattach="true">\n      <div\n        role="button"\n        aria-label="Remove button. Click to remove component from the form"\n        tabindex="-1"\n        class="inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-destructive/90 transition-colors component-settings-button component-settings-button-remove"\n        ref="removeComponent"\n      >\n        <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\n      </div>\n      ';
 if (!ctx.design) { ;
__p += '\n        <div\n          role="button"\n          aria-label="Copy button. Click to copy component"\n          tabindex="-1"\n          class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-accent transition-colors component-settings-button component-settings-button-copy"\n          ref="copyComponent"\n        >\n          <i class="' +
((__t = (ctx.iconClass('copy'))) == null ? '' : __t) +
'"></i>\n        </div>\n        <div\n          role="button"\n          aria-label="Paste below button. Click to paste component below the current component"\n          tabindex="-1"\n          class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-accent transition-colors component-settings-button component-settings-button-paste"\n          ref="pasteComponent"\n        >\n          <i class="' +
((__t = (ctx.iconClass('save'))) == null ? '' : __t) +
'"></i>\n        </div>\n        ';
 if (ctx.editJson !== false) { ;
__p += '\n          <div\n            role="button"\n            aria-label="Edit json button. Click to edit json of the current component"\n            tabindex="-1"\n            class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-accent transition-colors component-settings-button component-settings-button-edit-json"\n            ref="editJson"\n          >\n            <i class="' +
((__t = (ctx.iconClass('wrench'))) == null ? '' : __t) +
'"></i>\n          </div>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n      <div\n        role="button"\n        aria-label="Move button"\n        tabindex="-1"\n        class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-accent transition-colors component-settings-button component-settings-button-move"\n        ref="moveComponent"\n      >\n        <i class="' +
((__t = (ctx.iconClass('move'))) == null ? '' : __t) +
'"></i>\n      </div>\n      ';
 if (!(ctx.design && ctx.childComponent.type === 'reviewpage') && ctx.editComponent) { ;
__p += '\n        <div\n          role="button"\n          aria-label="Edit button. Click to open component settings modal window"\n          tabindex="-1"\n          class="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-1.5 py-0.5 text-xs shadow-sm hover:bg-secondary/80 transition-colors component-settings-button component-settings-button-edit"\n          ref="editComponent"\n        >\n          <i class="' +
((__t = (ctx.iconClass('cog'))) == null ? '' : __t) +
'"></i>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  ';
 } ;
__p += '\n  ' +
((__t = (ctx.html)) == null ? '' : __t) +
'\n</div>\n';
return __p
}