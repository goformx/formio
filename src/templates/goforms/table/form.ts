import { TableContext } from "../../../types/contexts";

export default function form(context: TableContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="table-form">
    <label for="${key}">${label}</label>
    <div class="table-content">
      ${value || "-"}
    </div>
  </div>`;
}
