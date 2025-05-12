interface SelectOptionContext {
  selected?: boolean;
  option: {
    value: string;
    label: string;
  };
  attrs?: Record<string, string>;
}

export default (ctx: SelectOptionContext) => `<option ${ctx.selected ? 'selected="selected"' : ""}
  value='${ctx.option.value}'
  ${Object.entries(ctx.attrs || {})
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(" ")}>
  ${ctx.option.label}
</option>`;
