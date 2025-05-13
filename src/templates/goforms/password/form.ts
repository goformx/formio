import { PasswordContext } from "../../../types/contexts";

export default function form(context: PasswordContext): string {
  const { component, input } = context;
  const { key, label, minLength, maxLength, pattern } = component;
  const { name, value, ref, attr } = input;

  const attrs = {
    type: "password",
    id: key,
    name,
    value,
    ref,
    ...(minLength !== undefined && { minlength: minLength }),
    ...(maxLength !== undefined && { maxlength: maxLength }),
    ...(pattern && { pattern }),
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
