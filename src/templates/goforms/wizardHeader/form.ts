interface WizardHeaderFormContext {
  panels: Array<{
    title: string;
    tooltip: string;
  }>;
  currentPage: number;
  wizardKey: string;
}

export default (ctx: WizardHeaderFormContext) => `<div class="ui steps">
  ${ctx.panels
    .map(
      (panel, index) => `
    <a class="${ctx.currentPage === index ? " active" : ""} step" ref="${ctx.wizardKey}-link">
      <div class="content">
        <div class="title">
          ${panel.title}
        </div>
        <div class="description">
          ${panel.tooltip}
        </div>
      </div>
    </a>
  `
    )
    .join("")}
</div>`;
