interface WizardHeaderVerticalPanel {
  title: string;
  tooltip?: string;
}

interface WizardHeaderVerticalContext {
  panels: WizardHeaderVerticalPanel[];
  currentPage: number;
  wizardKey: string;
  t: (key: string, opts?: Record<string, unknown>) => string;
  iconClass: (icon: string) => string;
}

export default (ctx: WizardHeaderVerticalContext) => {
  const panels = ctx.panels.map(
    (panel: WizardHeaderVerticalPanel, index: number) => `
    <li class=" item page-item${ctx.currentPage === index ? " active" : ""}" style="cursor: pointer;">
      <span class="page-link" ref="${ctx.wizardKey}-link" style="margin-left: 0px;">
        ${ctx.t(panel.title, { _userInput: true })}
        ${
          panel.tooltip && ctx.currentPage === index
            ? `<i ref="${ctx.wizardKey}-tooltip" class="${ctx.iconClass("question-sign")}" data-tooltip="${panel.tooltip}"></i>`
            : ""
        }
      </span>
    </li>
  `
  );
  return `<nav aria-label="navigation" id="${ctx.wizardKey}-header">
  <ul class="ui vertical fluid tabular menu">
    ${panels}
  </ul>
</nav>`;
};
