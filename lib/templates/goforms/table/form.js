export default (ctx) => `<table class="ui table
      ${ctx.component.striped ? "striped" : ""}
      ${ctx.component.bordered ? "celled" : ""}
      ${ctx.component.hover ? "selectable" : ""}
      ${ctx.component.condensed ? "compact" : "padded"}
    ">
    ${
      ctx.component.header && ctx.component.header.length > 0
        ? `
    <thead>
      <tr>
        ${ctx.component.header.map((header) => `<th>${ctx.t(header.label)}</th>`).join("")}
      </tr>
    </thead>
    `
        : ""
    }
    <tbody>
      ${ctx.tableComponents
        .map(
          (row, rowIndex) => `
        <tr>
          ${row
            .map(
              (cell, cellIndex) =>
                `<td${cell.className ? ` class="${cell.className}"` : ""}>${cell.value}</td>`
            )
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>`;
//# sourceMappingURL=form.js.map
