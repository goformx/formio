import { SelectOptionContext } from "../../../types/contexts";

export default function form(context: SelectOptionContext): string {
  const { selected, option, attrs } = context;
  const { value, label } = option;

  return `<option ${selected ? 'selected="selected"' : ""}
    value='${value}'
    ${Object.entries(attrs || {})
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(" ")}>
    ${label}
  </option>`;
}
