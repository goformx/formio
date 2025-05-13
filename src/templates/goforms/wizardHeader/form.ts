import { WizardHeaderFormContext } from "../../../types/contexts";

export default function form(context: WizardHeaderFormContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="wizard-header-form">
    <label for="${key}">${label}</label>
    <div class="wizard-header-content">
      ${value || "-"}
    </div>
  </div>`;
}
