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
declare const _default: (ctx: WizardHeaderVerticalContext) => string;
export default _default;
