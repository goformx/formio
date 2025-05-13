import { SelectBoxesContext } from "../../../types/contexts";

export default function form(context: SelectBoxesContext): string {
  const { component, input } = context;
  const { key, label, values, inline } = component;
  const { name, value, ref } = input;

  const selectedValues = value ? value.split(",") : [];

  return `<div class="form-group">
    <label for="${key}">${label}</label>
    <div class="selectboxes-group ${inline ? "inline" : ""}">
      ${values
        .map(
          (item) => `
        <div class="selectbox">
          <input
            type="checkbox"
            id="${key}-${item.value}"
            name="${name}"
            value="${item.value}"
            ref="${ref}"
            ${selectedValues.includes(item.value) ? "checked" : ""}
          />
          <label for="${key}-${item.value}">${item.label}</label>
        </div>
      `
        )
        .join("")}
    </div>
  </div>`;
}
