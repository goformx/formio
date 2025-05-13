import { SelectContext } from "../../../types/contexts";

export default function form(context: SelectContext): string {
  const { input, instance, component, options } = context;
  const { multiple, attr, ref } = input;
  const { id } = instance;
  const { key } = component;

  return `<select
    ref="${ref || "selectContainer"}"
    class="ui search dropdown"
    ${multiple ? "multiple" : ""}
    ${Object.entries(attr || {})
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(" ")}
    ${!attr?.id ? `id="${id}-${key}"` : ""}
  >${options}</select>
  <input type="text"
         class="formio-select-autocomplete-input"
         ref="autocompleteInput"
         ${attr?.autocomplete ? `autocomplete="${attr.autocomplete}"` : ""}
         tabindex="-1"
  />`;
}
