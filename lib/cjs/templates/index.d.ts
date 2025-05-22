declare const _default: {
    goforms: {
        webform: {
            form: string;
            builder: string;
        };
        well: {
            form: string;
        };
        wizard: {
            form: string;
            builder: string;
        };
        wizardHeader: {
            form: string;
        };
        wizardHeaderClassic: {
            form: string;
        };
        wizardHeaderVertical: {
            form: string;
        };
        wizardNav: {
            form: string;
        };
        errorsList: {
            form: string;
        };
        alert: {
            form: string;
        };
        treeView: {
            form: string;
        };
        treeEdit: {
            form: string;
        };
        transform(type: any, text: any, instance: any): any;
        defaultIconset: string;
        iconClass: (iconset: "bi" | "fa", name: string, spinning: boolean) => string;
        cssClasses: {
            'form-component': string;
            'form-components': string;
            'form-container': string;
            'form-field-wrapper': string;
            'form-field-wrapper-reverse': string;
            'form-field-label': string;
            'form-field-label-right': string;
            'form-field-hidden-label': string;
            'form-field-content': string;
            'form-field-description': string;
            'form-html-element': string;
            'form-html-element-content': string;
            'form-icon': string;
            'form-icon-content': string;
            'form-label': string;
            'form-label-required': string;
            'form-label-tooltip': string;
            'form-loader': string;
            'form-loader-spinner': string;
            'form-loader-content': string;
            'form-loading': string;
            'form-loading-overlay': string;
            'form-loading-spinner': string;
            'form-map': string;
            'form-map-container': string;
            'form-map-search': string;
            'form-map-results': string;
            'form-message': string;
            'form-message-error': string;
            'form-message-success': string;
            'form-message-warning': string;
            'form-message-info': string;
            'form-modal': string;
            'form-modal-dialog': string;
            'form-modal-content': string;
            'form-modal-header': string;
            'form-modal-title': string;
            'form-modal-body': string;
            'form-modal-footer': string;
            'form-modal-close': string;
            'form-modal-backdrop': string;
            'form-modal-edit': string;
            'form-modal-preview-button': string;
            'form-multi-value': string;
            'form-multi-value-row': string;
            'form-multi-value-table': string;
            'form-multi-value-input': string;
            'form-multi-value-remove': string;
            'form-multi-value-add': string;
            'form-multi-value-select': string;
            'form-panel': string;
            'form-panel-header': string;
            'form-panel-title': string;
            'form-panel-body': string;
            'form-panel-footer': string;
            'form-pdf': string;
            'form-pdf-container': string;
            'form-pdf-viewer': string;
            'form-pdf-toolbar': string;
            'form-pdf-builder': string;
            'form-pdf-builder-upload': string;
            'form-pdf-builder-preview': string;
            'form-radio': string;
            'form-radio-input': string;
            'form-radio-label': string;
            'form-radio-group': string;
            'form-resource': string;
            'form-resource-add': string;
            'form-resource-select': string;
            'form-resource-search': string;
            'form-wizard': string;
            'form-wizard-container': string;
            'form-wizard-vertical': string;
            'form-wizard-horizontal': string;
            'form-wizard-sidebar': string;
            'form-wizard-content': string;
            'form-wizard-navigation-container': string;
            'form-wizard-navigation-right': string;
            'form-wizard-header': string;
            'form-wizard-pages': string;
            'form-wizard-page': string;
            'form-wizard-page-active': string;
            'form-wizard-page-link': string;
            'form-wizard-page-tooltip': string;
            'form-wizard-navigation': string;
            'form-wizard-navigation-item': string;
            'form-wizard-navigation-button': string;
            'form-wizard-navigation-cancel': string;
            'form-wizard-navigation-previous': string;
            'form-wizard-navigation-next': string;
            'form-wizard-navigation-submit': string;
            'form-input': string;
            'form-input-group': string;
            'form-input-prefix': string;
            'form-input-suffix': string;
            'form-input-floating': string;
            'form-input-label': string;
            'form-input-mask': string;
            'form-input-editor': string;
            'form-input-counts': string;
            'form-input-char-count': string;
            'form-input-word-count': string;
            'form-input-value': string;
            'form-button': string;
            'form-button-default': string;
            'form-button-primary': string;
            'form-button-secondary': string;
            'form-button-success': string;
            'form-button-danger': string;
            'form-button-warning': string;
            'form-button-info': string;
            'form-button-sm': string;
            'form-button-md': string;
            'form-button-lg': string;
            'form-button-block': string;
            'form-button-icon': string;
            'form-button-icon-left': string;
            'form-button-icon-right': string;
            'form-button-content': string;
            'form-button-tooltip': string;
            'form-button-message': string;
            'form-button-value': string;
            'form-checkbox': string;
            'form-checkbox-input': string;
            'form-checkbox-label': string;
            'form-checkbox-tooltip': string;
            'form-checkbox-value': string;
            'form-columns-col': string;
            'form-columns-col-offset': string;
            'form-component-children': string;
            'form-component-errors': string;
            'form-builder': string;
            'form-builder-sidebar': string;
            'form-builder-area': string;
            'form-builder-component': string;
            'form-builder-component-header': string;
            'form-builder-component-title': string;
            'form-builder-component-actions': string;
            'form-builder-component-edit': string;
            'form-builder-component-remove': string;
            'form-builder-component-content': string;
            'form-builder-components': string;
            'form-builder-component-group': string;
            'form-builder-component-group-title': string;
            'form-builder-component-group-items': string;
            'form-builder-component-item': string;
            'form-builder-edit': string;
            'form-builder-edit-header': string;
            'form-builder-edit-title': string;
            'form-builder-edit-close': string;
            'form-builder-edit-content': string;
            'form-builder-edit-tabs': string;
            'form-builder-edit-tab': string;
            'form-builder-edit-panel': string;
            'form-builder-edit-footer': string;
            'form-builder-edit-cancel': string;
            'form-builder-edit-save': string;
            'form-builder-placeholder': string;
            'form-builder-placeholder-content': string;
            'form-builder-sidebar-group': string;
            'form-builder-sidebar-group-header': string;
            'form-builder-sidebar-group-toggle': string;
            'form-builder-sidebar-group-content': string;
            'form-builder-sidebar-group-items': string;
            'form-builder-sidebar-component': string;
            'form-builder-sidebar-no-matches': string;
            'form-builder-wizard': string;
            'form-builder-wizard-main': string;
            'border-default': string;
            'formio-tab-panel-active': string;
            'formio-tab-link-active': string;
            'formio-tab-link-container-active': string;
            'formio-form-error': string;
            'formio-form-alert': string;
            'formio-label-error': string;
            'formio-input-error': string;
            'formio-alert-danger': string;
            'formio-alert-success': string;
            'formio-alert-warning': string;
            'formio-modal-cancel-button': string;
            'formio-modal-confirm-button': string;
            'form-group': string;
        };
        address: {
            form: string;
            html: string;
        };
        builder: {
            form: string;
        };
        builderComponent: {
            form: string;
        };
        builderComponents: {
            form: string;
        };
        builderEditForm: {
            form: string;
        };
        builderPlaceholder: {
            form: string;
        };
        builderSidebar: {
            form: string;
        };
        builderSidebarGroup: {
            form: string;
        };
        builderWizard: {
            form: string;
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
        componentModal: {
            form: string;
        };
        components: {
            form: string;
        };
        tableComponents: {
            form: string;
        };
        container: {
            form: string;
        };
        datagrid: {
            form: string;
            html: string;
        };
        day: {
            form: string;
        };
        dialog: {
            form: string;
        };
        editgrid: {
            form: string;
            html: string;
        };
        editgridTable: {
            form: string;
            html: string;
        };
        field: {
            form: string;
            align: string;
        };
        fieldset: {
            form: string;
        };
        file: {
            form: string;
        };
        html: {
            form: string;
        };
        icon: {
            form: string;
        };
        input: {
            form: string;
            html: string;
        };
        label: {
            form: string;
        };
        loader: {
            form: string;
        };
        loading: {
            form: string;
        };
        map: {
            form: string;
        };
        message: {
            form: string;
        };
        modaledit: {
            form: string;
        };
        modaldialog: {
            form: string;
        };
        modalPreview: {
            form: string;
        };
        multipleMasksInput: {
            form: string;
        };
        multiValueRow: {
            form: string;
        };
        multiValueTable: {
            form: string;
        };
        panel: {
            form: string;
        };
        pdf: {
            form: string;
        };
        pdfBuilder: {
            form: string;
        };
        pdfBuilderUpload: {
            form: string;
        };
        radio: {
            form: string;
            html: string;
        };
        resourceAdd: {
            form: string;
        };
        select: {
            form: string;
            html: string;
        };
        selectOption: {
            form: string;
            html: string;
        };
        signature: {
            form: string;
            html: string;
        };
        survey: {
            form: string;
            html: string;
        };
        tab: {
            flat: string;
            form: string;
        };
        table: {
            form: string;
        };
        tree: {
            form: string;
        };
    };
};
export default _default;
