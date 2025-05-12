interface RadioFormContext {
  inline?: boolean;
  values: Array<{
    label: string;
    value: string;
    selected?: boolean;
  }>;
  input: {
    type: string;
    attr: {
      type?: string;
    };
  };
}

export default (ctx: RadioFormContext) => `<div class="fields ${ctx.inline ? "inline" : "grouped"}">
  ${ctx.values
    .map(
      (item) => `
    <div class="field">
      <div class="ui ${ctx.input.attr.type === "radio" ? "radio" : ""} checkbox" ref="wrapper">
        <${ctx.input.type}
          type="${ctx.input.attr.type || "radio"}"
          value="${item.value}"
          ${item.selected ? "checked" : ""}
        />
        <label>${item.label}</label>
      </div>
    </div>
  `
    )
    .join("")}
</div>`;
