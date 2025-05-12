import { NumberContext } from "../../../types/contexts";

export default (ctx: NumberContext) => `
  <div class="ui input">
    <input
      type="number"
      name="${ctx.input.name}"
      value="${ctx.input.value}"
      ref="${ctx.input.ref}"
      ${ctx.component.min !== undefined ? `min="${ctx.component.min}"` : ""}
      ${ctx.component.max !== undefined ? `max="${ctx.component.max}"` : ""}
      ${ctx.component.step !== undefined ? `step="${ctx.component.step}"` : ""}
      ${
        ctx.input.attr
          ? Object.entries(ctx.input.attr)
              .map(([key, value]) => `${key}="${value}"`)
              .join(" ")
          : ""
      }
    />
  </div>
`;
