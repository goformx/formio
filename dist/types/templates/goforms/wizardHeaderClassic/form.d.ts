interface WizardHeaderClassicFormContext {
    panels: Array<{
        title: string;
        tooltip: string;
    }>;
    currentPage: number;
    wizardKey: string;
}
declare const _default: (ctx: WizardHeaderClassicFormContext) => string;
export default _default;
