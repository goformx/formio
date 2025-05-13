import { SurveyHTMLContext } from "../../../types/contexts";

export default function html(context: SurveyHTMLContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="survey-display" id="${key}">
    <label>${label}</label>
    <div class="survey-answers">
      ${value || "-"}
    </div>
  </div>`;
}
