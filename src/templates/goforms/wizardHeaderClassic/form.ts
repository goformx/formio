interface WizardHeaderClassicFormContext {
  panels: Array<{
    title: string;
    tooltip: string;
  }>;
  currentPage: number;
  wizardKey: string;
}

export default (
  ctx: WizardHeaderClassicFormContext
) => `<div class="ui stackable grid" style="border-bottom:0;">
  ${ctx.panels
    .map(
      (panel, index) => `
    <div class="classic-pagination-page four wide computer eight wide tablet sixteen wide mobile column
      ${ctx.currentPage < index ? " disabled" : ""}
      ${ctx.currentPage === index ? " active" : ""}"
      ref="${ctx.wizardKey}-link">
      <div class="content">
        <div class="title">
          ${panel.title}
        </div>
        <div class="description">
          ${panel.tooltip}
        </div>
      </div>
    </div>
  `
    )
    .join("")}
</div>`;
