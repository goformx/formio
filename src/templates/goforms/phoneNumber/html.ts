import { PhoneNumberContext } from "../../../types/contexts";

export default (ctx: PhoneNumberContext) => `
  <div class="ui input">
    <input
      type="tel"
      name="${ctx.input.name}"
      value="${ctx.input.value}"
      ref="${ctx.input.ref}"
      ${ctx.component.inputMask ? `data-inputmask="${ctx.component.inputMask}"` : ""}
      ${ctx.component.validateOn ? `data-validate-on="${ctx.component.validateOn}"` : ""}
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
