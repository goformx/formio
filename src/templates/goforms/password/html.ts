import { PasswordContext } from "../../../types/contexts";

export default (ctx: PasswordContext) => `
  <div class="ui input">
    <input
      type="password"
      name="${ctx.input.name}"
      value="${ctx.input.value}"
      ref="${ctx.input.ref}"
      ${ctx.component.minLength ? `minlength="${ctx.component.minLength}"` : ""}
      ${ctx.component.maxLength ? `maxlength="${ctx.component.maxLength}"` : ""}
      ${ctx.component.pattern ? `pattern="${ctx.component.pattern}"` : ""}
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
