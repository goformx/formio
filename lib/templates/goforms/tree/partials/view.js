export default (ctx) => `<div class="ui grid">
  <div class="row">
    ${ctx.values
      .map(
        (value) => `
      <div class="two wide column">
        ${value}
      </div>
    `
      )
      .join("")}
    <div class="five wide column">
      <div class="ui mini right floated buttons">
        ${
          ctx.node.hasChildren
            ? `
          <button ref="toggleNode" class="ui button toggleNode">${ctx.t(ctx.node.collapsed ? "Expand" : "Collapse")}</button>
          <div class="or"></div>
        `
            : ""
        }
        ${
          !ctx.readOnly
            ? `
          <button ref="addChild" class="ui button primary addChild">${ctx.t("Add")}</button>
          <div class="or"></div>
          <button ref="editNode" class="ui button editNode">${ctx.t("Edit")}</button>
          <div class="or"></div>
          <button ref="removeNode" class="ui button negative removeNode">${ctx.t("Delete")}</button>
          ${
            ctx.node.revertAvailable
              ? `
            <div class="or"></div>
            <button ref="revertNode" class="ui button negative revertNode">${ctx.t("Revert")}</button>
          `
              : ""
          }
        `
            : ""
        }
      </div>
    </div>
  </div>
</div>`;
//# sourceMappingURL=view.js.map
