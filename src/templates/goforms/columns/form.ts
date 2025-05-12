interface ColumnsContext {
  t: (key: string) => string;
  component: {
    columns: Array<{
      width: number;
      components: unknown[];
    }>;
  };
  transform: (type: string, value: string | number) => string;
  columnComponents: unknown[];
  columnKey: string;
}

export default (ctx: ColumnsContext) => `
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
