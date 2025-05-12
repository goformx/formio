export default (ctx) => `
  <div class="formio-columns">
    ${ctx.component.columns
      .map(
        (column, index) => `
      <div class="${ctx.transform("columns", column.width)} wide column" ref="${ctx.columnKey}">
        ${ctx.columnComponents[index]}
      </div>
    `
      )
      .join("")}
  </div>
`;
//# sourceMappingURL=form.js.map
