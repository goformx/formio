import { SelectBoxesContext } from "../../../types/contexts";

export default (ctx: SelectBoxesContext) => `
  <div class="ui selectboxes ${ctx.component.inline ? "inline" : ""}">
    ${ctx.component.values
      .map(
        (option) => `
      <div class="field">
        <div class="ui checkbox">
          <input
            type="checkbox"
            name="${ctx.input.name}"
            value="${option.value}"
            ${ctx.input.value === option.value ? "checked" : ""}
            ref="${ctx.input.ref}"
          />
          <label>${option.label}</label>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
`;
