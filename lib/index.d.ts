declare const _default: {
    framework: string;
    templates: {
        goforms: {
            framework: string;
            transform: (type: string, text: string) => any;
            defaultIconset: string;
            iconClass: iconClass;
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
                form: string;
                html: string;
            };
            checkbox: {
                form: string;
                html: string;
            };
            columns: {
                form: string;
            };
            component: {
                form: string;
            };
            fieldset: {
                form: string;
            };
            input: {
                form: string;
                html: string;
            };
            panel: {
                form: string;
            };
            radio: {
                form: string;
                html: string;
            };
            select: {
                form: string;
                html: string;
            };
        };
    };
};
export default _default;

declare function iconClass(iconName: string): string;

export { }
