import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div class="ui grid" style="width: 100%">
  ${(ctx.component.columns as Record<string, unknown>[])
    .map(
      (column, index: number) => `
    <div class="${ctx.transform("columns", column.width)} wide column" ref="${ctx.columnKey}">
      ${ctx.columnComponents[index]}
    </div>
  `,
    )
    .join("")}
</div>`;
