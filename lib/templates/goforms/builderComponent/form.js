export default (ctx) => {
  const iconClass = ctx.iconClass;
  const html = ctx.html;
  return `<div class="builder-component" ref="dragComponent">
    <div class="component-btn-group" data-noattach="true">
      <div class="ui button mini icon primary component-settings-button-edit" ref="editComponent">
        <i class="${iconClass("cog")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-copy" ref="copyComponent">
        <i class="${iconClass("copy")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-paste" ref="pasteComponent">
        <i class="${iconClass("save")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-edit-json" ref="editJson">
        <i class="${iconClass("wrench")}"></i>
      </div>
      <div class="ui button mini icon component-settings-button-move" ref="moveComponent">
        <i class="${iconClass("move")}"></i>
      </div>
      <div class="ui button mini icon secondary component-settings-button-remove" ref="removeComponent">
        <i class="${iconClass("remove")}"></i>
      </div>
    </div>
    ${html}
  </div>`;
};
//# sourceMappingURL=form.js.map
