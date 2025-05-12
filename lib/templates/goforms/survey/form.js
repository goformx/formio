export default (ctx) => `<table class="ui table striped celled">
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
      <td>${ctx.t(question.label)}</td>
      ${ctx.component.values
        .map(
          (value) => `
      <td style="text-align: center;">
        <input type="radio" name="${ctx.self.getInputName(question)}" value="${value.value}" id="${ctx.key}-${question.value}-${value.value}" ref="input">
      </td>
      `
        )
        .join("")}
    </tr>
    `
      )
      .join("")}
  </tbody>
</table>`;
//# sourceMappingURL=form.js.map
