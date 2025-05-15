declare const _default: {
    goforms: {
        framework: string;
        transform: (type: string, text: string) => any;
        defaultIconset: string;
        iconClass: typeof import("./goforms/iconClass").default;
        cssClasses: {
            form: string;
            field: string;
            label: string;
            input: string;
            select: string;
            checkbox: string;
            radio: string;
            button: string;
            message: string;
            error: string;
            help: string;
        };
        button: {
            form: (data?: Partial<EjsTemplateData>) => string;
            html: (data?: Partial<EjsTemplateData>) => string;
        };
        checkbox: {
            form: (data?: Partial<EjsTemplateData>) => string;
            html: (data?: Partial<EjsTemplateData>) => string;
        };
        columns: {
            form: (data?: Partial<EjsTemplateData>) => string;
        };
        component: {
            form: (data?: Partial<EjsTemplateData>) => string;
        };
        fieldset: {
            form: (data?: Partial<EjsTemplateData>) => string;
        };
        input: {
            form: (data?: Partial<EjsTemplateData>) => string;
            html: (data?: Partial<EjsTemplateData>) => string;
        };
        panel: {
            form: (data?: Partial<EjsTemplateData>) => string;
        };
        radio: {
            form: (data?: Partial<EjsTemplateData>) => string;
            html: (data?: Partial<EjsTemplateData>) => string;
        };
        select: {
            form: (data?: Partial<EjsTemplateData>) => string;
            html: (data?: Partial<EjsTemplateData>) => string;
        };
    };
};
export default _default;
