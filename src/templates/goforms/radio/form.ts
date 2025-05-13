import { RadioFormContext } from "../../../types/contexts";

export default function form(context: RadioFormContext): string {
  const { component, input } = context;
  const { key, label, values } = component;
  const { name, value, ref } = input;

  return `<div class="form-group">
    <label for="${key}">${label}</label>
    <div class="radio-group">
      ${values
        .map(
          (item) => `
        <div class="radio">
          <input
            type="radio"
            id="${key}-${item.value}"
            name="${name}"
            value="${item.value}"
            ref="${ref}"
            ${value === item.value ? "checked" : ""}
          />
          <label for="${key}-${item.value}">${item.label}</label>
        </div>
      `
        )
        .join("")}
    </div>
  </div>`;
}
