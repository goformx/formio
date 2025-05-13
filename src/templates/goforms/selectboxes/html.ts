import { SelectBoxesContext } from "../../../types/contexts";

export default function html(context: SelectBoxesContext): string {
  const { component, input } = context;
  const { key, values } = component;
  const { value } = input;

  const selectedValues = value ? value.split(",") : [];
  const selectedLabels = values
    .filter((item) => selectedValues.includes(item.value))
    .map((item) => item.label)
    .join(", ");

  return `<div class="selectboxes-display" id="${key}">
    ${selectedLabels || "-"}
  </div>`;
}
