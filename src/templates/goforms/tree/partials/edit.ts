interface TreeEditContext {
  readOnly?: boolean;
  children: string;
  t: (key: string) => string;
}

export default (ctx: TreeEditContext) => `<div class="node-edit">
  <div ref="nodeEdit">${ctx.children}</div>
  ${
    !ctx.readOnly
      ? `
    <div class="node-actions">
      <button ref="saveNode" class="ui mini primary button saveNode">${ctx.t("Save")}</button>
      <button ref="cancelNode" class="ui mini button cancelNode">${ctx.t("Cancel")}</button>
    </div>
  `
      : ""
  }
</div>`;
