import { TabFlatContext } from "../../../types/contexts";

export default function flat(context: TabFlatContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="tab-flat" id="${key}">
    <label>${label}</label>
    <div class="tab-content">
      ${value || "-"}
    </div>
  </div>`;
}
