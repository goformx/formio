import { SelectHTMLContext } from "../../../types/contexts";

export default function html(context: SelectHTMLContext): string {
  const { component, options } = context;
  const { key } = component;

  return `<div class="select-display" id="${key}">
    ${options || "-"}
  </div>`;
}
