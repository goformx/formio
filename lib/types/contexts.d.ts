import { TemplateContext } from "../templates/goforms/types";
export interface BaseContext extends TemplateContext {
    t: (key: string) => string;
    iconClass: (name: string) => string;
}
export interface BuilderEditFormContext extends BaseContext {
    componentInfo: {
        title: string;
        documentation?: string;
        help?: string;
    };
    preview?: boolean;
    editForm?: string;
}
export interface BuilderSidebarContext extends BaseContext {
    groups: string[];
}
export interface ColumnsContext extends BaseContext {
    component: {
        columns: Array<{
            width: number;
            components: unknown[];
        }>;
    };
    transform: (type: string, value: string | number) => string;
    columnComponents: unknown[];
    columnKey: string;
}
export interface EditGridContext extends BaseContext {
    errors: Record<number, string>;
    ref: {
        addRow: () => void;
        removeRow: (index: number) => void;
    };
    openRows: Record<number, boolean>;
    readOnly: boolean;
    component: {
        label: string;
        key: string;
    };
    rows: Array<{
        index: number;
        data: Record<string, unknown>;
    }>;
    header: string;
    preview: string;
    addAnother: string;
    footer: string;
}
export interface FieldsetContext extends BaseContext {
    component: {
        key: string;
        label: string;
        legend: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface FileContext extends BaseContext {
    component: {
        key: string;
        label: string;
        storage?: string;
        filePattern?: string;
        fileMinSize?: string;
        fileMaxSize?: string;
        multiple?: boolean;
    };
    input: {
        name: string;
        value: string;
        ref: string;
        attr?: Record<string, string>;
    };
}
export interface FormContext extends BaseContext {
    component: {
        key: string;
        label: string;
        action?: string;
        method?: string;
        enctype?: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
    children?: string;
}
export interface HTMLElementContext extends BaseContext {
    component: {
        key: string;
        label: string;
        content?: string;
        className?: string;
        attrs?: Record<string, string>;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface NumberContext extends BaseContext {
    component: {
        key: string;
        label: string;
        min?: number;
        max?: number;
        step?: number;
        decimalLimit?: number;
        requireDecimal?: boolean;
    };
    input: {
        name: string;
        value: string;
        ref: string;
        attr?: Record<string, string>;
    };
}
export interface PanelContext extends BaseContext {
    component: {
        key: string;
        label: string;
        title?: string;
        collapsible?: boolean;
        collapsed?: boolean;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface PasswordContext extends BaseContext {
    component: {
        key: string;
        label: string;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
        attr?: Record<string, string>;
    };
}
export interface PhoneNumberContext extends BaseContext {
    component: {
        key: string;
        label: string;
        inputMask?: string;
        validateOn?: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
        attr?: Record<string, string>;
    };
}
export interface RadioFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
        values: Array<{
            label: string;
            value: string;
        }>;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface RadioHTMLContext extends BaseContext {
    component: {
        key: string;
        label: string;
        values: Array<{
            label: string;
            value: string;
        }>;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface ResourceContext extends BaseContext {
    component: {
        key: string;
        label: string;
        resource?: string;
        template?: string;
        searchField?: string;
        searchDebounce?: number;
        minSearch?: number;
        filter?: string;
        selectFields?: string;
        sort?: string;
        refreshOn?: string;
        clearOnRefresh?: boolean;
        clearOnHide?: boolean;
        allowCreate?: boolean;
        allowEdit?: boolean;
        allowDelete?: boolean;
    };
    input: {
        name: string;
        value: string;
        ref: string;
        attr?: Record<string, string>;
    };
}
export interface SelectContext extends BaseContext {
    input: {
        multiple?: boolean;
        attr?: Record<string, string>;
        ref?: string;
    };
    instance: {
        id: string;
    };
    component: {
        key: string;
    };
    options: string;
}
export interface SelectHTMLContext extends BaseContext {
    input: {
        multiple?: boolean;
        attr?: Record<string, string>;
        ref?: string;
    };
    instance: {
        id: string;
    };
    component: {
        key: string;
    };
    options: string;
}
export interface SelectBoxesContext extends BaseContext {
    component: {
        key: string;
        label: string;
        values: Array<{
            label: string;
            value: string;
        }>;
        inline?: boolean;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface SelectOptionContext extends BaseContext {
    selected?: boolean;
    option: {
        value: string;
        label: string;
    };
    attrs?: Record<string, string>;
}
export interface SelectOptionHTMLContext extends BaseContext {
    selected?: boolean;
    option: {
        value: string;
        label: string;
    };
    attrs?: Record<string, string>;
}
export interface SignatureFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
    element: {
        width?: number;
        height?: number;
        backgroundColor?: string;
        penColor?: string;
    };
}
export interface SurveyFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface SurveyHTMLContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface TabFlatContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface TabFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface TableContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface TreeEditContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface TreeFormContext extends BaseContext {
    view: string;
    content?: string;
    childNodes?: string[];
}
export interface TreeViewContext extends BaseContext {
    values: Array<string | number>;
    node: {
        hasChildren: boolean;
        collapsed: boolean;
        revertAvailable: boolean;
    };
    readOnly: boolean;
}
export interface WizardFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface WizardHeaderFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
export interface WizardHeaderClassicFormContext extends BaseContext {
    component: {
        key: string;
        label: string;
    };
    input: {
        name: string;
        value: string;
        ref: string;
    };
}
