interface WizardHeaderFormContext {
    panels: Array<{
        title: string;
        tooltip: string;
    }>;
    currentPage: number;
    wizardKey: string;
}
declare const _default: (ctx: WizardHeaderFormContext) => string;
export default _default;
