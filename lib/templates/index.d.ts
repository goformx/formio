import type { BuilderEditFormContext, RadioFormContext, RadioHTMLContext, SelectContext, SelectHTMLContext, SelectOptionContext, SelectOptionHTMLContext, SignatureFormContext, SurveyFormContext, SurveyHTMLContext, TabFlatContext, TabFormContext, TableContext, TreeEditContext, TreeFormContext, TreeViewContext, WizardFormContext, WizardHeaderClassicFormContext, WizardHeaderFormContext } from "../types/contexts";
interface CSSClasses {
    [key: string]: string;
    "has-error": string;
    "is-invalid": string;
    "formio-tab-panel-active": string;
    "formio-tab-link-active": string;
    "formio-tab-link-container-active": string;
}
export interface Templates {
    transform: (type: string, text: string | number) => string;
    defaultIconset: string;
    iconClass: (iconset: string, name: string, spinning?: boolean) => string;
    cssClasses: CSSClasses;
    builder: unknown;
    builderComponent: unknown;
    builderComponents: unknown;
    builderEditForm: {
        form: (ctx: BuilderEditFormContext) => string;
    };
    builderPlaceholder: unknown;
    builderSidebar: unknown;
    builderSidebarGroup: unknown;
    builderWizard: unknown;
    button: unknown;
    checkbox: unknown;
    columns: unknown;
    component: unknown;
    datagrid: unknown;
    day: unknown;
    editgrid: unknown;
    field: unknown;
    fieldset: unknown;
    file: unknown;
    icon: unknown;
    input: unknown;
    label: unknown;
    loader: unknown;
    loading: unknown;
    message: unknown;
    multiValueRow: unknown;
    multiValueTable: unknown;
    panel: unknown;
    radio: {
        form: (ctx: RadioFormContext) => string;
        html: (ctx: RadioHTMLContext) => string;
    };
    resourceAdd: unknown;
    select: {
        form: (ctx: SelectContext) => string;
        html: (ctx: SelectHTMLContext) => string;
    };
    selectOption: {
        form: (ctx: SelectOptionContext) => string;
        html: (ctx: SelectOptionHTMLContext) => string;
    };
    signature: {
        form: (ctx: SignatureFormContext) => string;
    };
    survey: {
        form: (ctx: SurveyFormContext) => string;
        html: (ctx: SurveyHTMLContext) => string;
    };
    tab: {
        form: (ctx: TabFormContext) => string;
        flat: (ctx: TabFlatContext) => string;
    };
    table: {
        form: (ctx: TableContext) => string;
    };
    tree: {
        form: (ctx: TreeFormContext) => string;
    };
    treeEdit: {
        form: (ctx: TreeEditContext) => string;
    };
    treeView: {
        form: (ctx: TreeViewContext) => string;
    };
    webform: unknown;
    well: unknown;
    wizard: {
        form: (ctx: WizardFormContext) => string;
    };
    wizardHeader: {
        form: (ctx: WizardHeaderFormContext) => string;
    };
    wizardHeaderClassic: {
        form: (ctx: WizardHeaderClassicFormContext) => string;
    };
    wizardHeaderVertical: unknown;
    wizardNav: unknown;
    alert: unknown;
    errorsList: unknown;
}
declare const _default: Templates;
export default _default;
