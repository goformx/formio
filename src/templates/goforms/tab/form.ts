import { TabFormContext } from "../../../types/contexts";

export default function form(context: TabFormContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="tab-form">
    <label for="${key}">${label}</label>
    <div class="tab-content">
      ${value || "-"}
    </div>
  </div>`;
}
