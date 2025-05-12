interface SelectHTMLContext {
  value: string | number | null;
  self: {
    itemValueForHTMLMode: (value: string | number) => string;
  };
}

export default (ctx: SelectHTMLContext) => `<div ref="value">
  ${ctx.value ? ctx.self.itemValueForHTMLMode(ctx.value) : "-"}
</div>`;
