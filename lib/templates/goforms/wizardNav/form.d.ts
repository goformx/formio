interface WizardNavButtons {
    cancel?: boolean;
    previous?: boolean;
    next?: boolean;
    submit?: boolean;
}
interface WizardNavContext {
    buttons: WizardNavButtons;
    wizardKey: string;
    t: (key: string) => string;
}
declare const _default: (ctx: WizardNavContext) => string;
export default _default;
