interface TableHeader {
  label: string;
  key: string;
}

interface TableCell {
  value: string;
  className?: string;
}

interface TableContext {
  component: {
    condensed?: boolean;
    header?: TableHeader[];
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
  };
  rows: string;
  tableComponents: TableCell[][];
  t: (key: string) => string;
}

export default (ctx: TableContext) => `<table class="ui table
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
        ${ctx.component.header
          .map((header: TableHeader) => `<th>${ctx.t(header.label)}</th>`)
          .join("")}
      </tr>
    </thead>
    `
        : ""
    }
    <tbody>
      ${ctx.tableComponents
        .map(
          (row: TableCell[], _rowIndex: number) => `
        <tr>
          ${row
            .map(
              (cell: TableCell, _cellIndex: number) =>
                `<td${cell.className ? ` class="${cell.className}"` : ""}>${cell.value}</td>`
            )
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>`;
