import { FileContext } from "../../../types/contexts";

export default (ctx: FileContext) => `
  <div class="ui file input">
    <input
      type="file"
      name="${ctx.input.name}"
      value="${ctx.input.value}"
      ref="${ctx.input.ref}"
      ${ctx.component.multiple ? "multiple" : ""}
      ${ctx.component.filePattern ? `accept="${ctx.component.filePattern}"` : ""}
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
