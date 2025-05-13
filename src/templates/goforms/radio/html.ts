import { RadioHTMLContext } from "../../../types/contexts";

export default function html(context: RadioHTMLContext): string {
  const { component, input } = context;
  const { values } = component;
  const { value } = input;

  return `<div class="radio-display">
    ${values
      .filter((item) => {
        if (value == null) return false;
        if (value === item.value) return true;
        if (typeof value === "object") {
          const objValue = value as Record<string, unknown>;
          return Object.prototype.hasOwnProperty.call(objValue, item.value) && objValue[item.value];
        }
        return false;
      })
      .map((item) => item.label)
      .join(", ")}
  </div>`;
}
