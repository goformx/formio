export default (ctx) => `<option ${ctx.selected ? 'selected="selected"' : ""}
  value='${ctx.option.value}'
  ${Object.entries(ctx.attrs || {})
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(" ")}>
  ${ctx.option.label}
</option>`;
//# sourceMappingURL=form.js.map
