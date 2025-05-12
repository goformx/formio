interface SurveyHTMLContext {
  component: {
    questions: Array<{
      label: string;
    }>;
    values: Array<{
      label: string;
    }>;
  };
  t: (key: string) => string;
}

export default (ctx: SurveyHTMLContext) => `
  <table class="ui table">
    <thead>
      <tr>
        <th></th>
        ${ctx.component.values
          .map(
            (value) => `
        <th style="text-align: center;">${ctx.t(value.label)}</th>
        `
          )
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${ctx.component.questions
        .map(
          (question) => `
      <tr>
        <th>${ctx.t(question.label)}</th>
        <td>
          ${ctx.component.values
            .map(
              (item) => `
          <div class="ui radio checkbox">
            <input type="radio" name="${question.label}" value="${item.label}" />
            <label>${ctx.t(item.label)}</label>
          </div>
          `
            )
            .join("")}
        </td>
      </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`;
