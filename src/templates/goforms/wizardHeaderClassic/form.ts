import { WizardHeaderClassicFormContext } from "../../../types/contexts";

export default function form(context: WizardHeaderClassicFormContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="wizard-header-classic-form">
    <label for="${key}">${label}</label>
    <div class="wizard-header-classic-content">
      ${value || "-"}
    </div>
  </div>`;
}
