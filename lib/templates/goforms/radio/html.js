export default (ctx) => `<div ref="value">
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
//# sourceMappingURL=html.js.map
