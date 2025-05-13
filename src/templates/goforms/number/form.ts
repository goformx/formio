import { NumberContext } from "../../../types/contexts";

export default function form(context: NumberContext): string {
  const { component, input } = context;
  const { key, label, min, max, step, decimalLimit, requireDecimal } = component;
  const { name, value, ref, attr } = input;

  const attrs = {
    type: "number",
    id: key,
    name,
    value,
    ref,
    ...(min !== undefined && { min }),
    ...(max !== undefined && { max }),
    ...(step !== undefined && { step }),
    ...(decimalLimit !== undefined && { "data-decimal-limit": decimalLimit }),
    ...(requireDecimal && { "data-require-decimal": "true" }),
    ...attr,
  };

  return `
    <div class="form-group">
      <label for="${key}">${label}</label>
      <input ${Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")} />
    </div>
  `;
}
