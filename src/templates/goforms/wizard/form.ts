import { WizardFormContext } from "../../../types/contexts";

export default function form(context: WizardFormContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="wizard-form">
    <label for="${key}">${label}</label>
    <div class="wizard-content">
      ${value || "-"}
    </div>
  </div>`;
}
