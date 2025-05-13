import { HTMLElementContext } from "../../../types/contexts";

export default function form(context: HTMLElementContext): string {
  const { component, input } = context;
  const { key, label, content, className, attrs } = component;
  const { name, ref } = input;

  return `
    <div class="form-group">
      <label for="${key}">${label}</label>
      <div
        id="${key}"
        name="${name}"
        ref="${ref}"
        class="${className || ""}"
        ${
          attrs
            ? Object.entries(attrs)
                .map(([k, v]) => `${k}="${v}"`)
                .join(" ")
            : ""
        }
      >${content || ""}</div>
    </div>
  `;
}
