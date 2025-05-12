interface EditGridContext {
  t: (key: string) => string;
  errors: Record<number, string>;
  ref: {
    addRow: () => void;
    removeRow: (index: number) => void;
  };
  openRows: Record<number, boolean>;
  readOnly: boolean;
  component: {
    label: string;
    key: string;
  };
  rows: Array<{
    index: number;
    data: Record<string, unknown>;
  }>;
  header: string;
  preview: string;
  iconClass: (name: string) => string;
  addAnother: string;
  footer: string;
}

export default (ctx: EditGridContext) => `
  <div class="formio-editgrid">
    <div class="formio-editgrid-header">
      ${ctx.header}
    </div>
    <div class="formio-editgrid-body">
      ${ctx.rows
        .map(
          (row, index) => `
        <div class="formio-editgrid-row">
          <div class="formio-editgrid-row-header">
            <div class="formio-editgrid-row-title">
              ${ctx.t("Row")} ${index + 1}
            </div>
            <div class="formio-editgrid-row-actions">
              ${
                !ctx.readOnly
                  ? `
                <button class="ui button" onclick="event.preventDefault(); ${ctx.ref.removeRow(index)}">
                  <i class="${ctx.iconClass("remove")}"></i>
                </button>
              `
                  : ""
              }
            </div>
          </div>
          <div class="formio-editgrid-row-content">
            ${ctx.preview}
          </div>
          ${
            ctx.errors[index]
              ? `
            <div class="formio-editgrid-row-error">
              ${ctx.errors[index]}
            </div>
          `
              : ""
          }
        </div>
      `
        )
        .join("")}
    </div>
    <div class="formio-editgrid-footer">
      ${
        !ctx.readOnly
          ? `
        <button class="ui button primary" onclick="event.preventDefault(); ${ctx.ref.addRow()}">
          <i class="${ctx.iconClass("plus")}"></i> ${ctx.addAnother}
        </button>
      `
          : ""
      }
      ${ctx.footer}
    </div>
  </div>
`;
