import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div id="builder-sidebar-${ctx.id}" class="ui segments" ref="sidebar">
  ${ctx.groups.map((group: string) => `${group}`).join("")}
</div>`;
