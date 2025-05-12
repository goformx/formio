interface RadioHTMLContext {
  values: Array<{
    label: string;
    value: string;
  }>;
  value: string | Record<string, boolean>;
  t: (key: string) => string;
}

export default (ctx: RadioHTMLContext) => `<div ref="value">
  ${ctx.values
    .filter(
      (item) =>
        ctx.value === item.value ||
        (typeof ctx.value === "object" &&
          Object.prototype.hasOwnProperty.call(ctx.value, item.value) &&
          ctx.value[item.value])
    )
    .map((item) => ctx.t(item.label))
    .join(", ")}
</div>`;
