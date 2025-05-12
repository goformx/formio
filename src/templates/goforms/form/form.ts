import { FormContext } from "../../../types/contexts";

export default (ctx: FormContext) => `
  <form
    class="ui form"
    action="${ctx.component.action || ""}"
    method="${ctx.component.method || "post"}"
    enctype="${ctx.component.enctype || "application/x-www-form-urlencoded"}"
    ref="${ctx.input.ref}"
  >
    ${ctx.children || ""}
  </form>
`;
