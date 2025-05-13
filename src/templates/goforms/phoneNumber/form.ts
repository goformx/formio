import { PhoneNumberContext } from "../../../types/contexts";

export default function form(context: PhoneNumberContext): string {
  const { component, input } = context;
  const { key, label, inputMask, validateOn } = component;
  const { name, value, ref, attr } = input;

  const attrs = {
    type: "tel",
    id: key,
    name,
    value,
    ref,
    ...(inputMask && { "data-input-mask": inputMask }),
    ...(validateOn && { "data-validate-on": validateOn }),
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
