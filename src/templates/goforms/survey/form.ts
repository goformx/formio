import { SurveyFormContext } from "../../../types/contexts";

export default function form(context: SurveyFormContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="survey-form">
    <label for="${key}">${label}</label>
    <div class="survey-questions">
      ${value || "-"}
    </div>
  </div>`;
}
