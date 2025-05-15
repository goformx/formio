"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const builder_1 = __importDefault(require("./builder"));
const builderComponent_1 = __importDefault(require("./builderComponent"));
const builderComponents_1 = __importDefault(require("./builderComponents"));
const builderEditForm_1 = __importDefault(require("./builderEditForm"));
const builderPlaceholder_1 = __importDefault(require("./builderPlaceholder"));
const builderSidebar_1 = __importDefault(require("./builderSidebar"));
const builderSidebarGroup_1 = __importDefault(require("./builderSidebarGroup"));
const builderWizard_1 = __importDefault(require("./builderWizard"));
const button_1 = __importDefault(require("./button"));
const checkbox_1 = __importDefault(require("./checkbox"));
const columns_1 = __importDefault(require("./columns"));
const component_1 = __importDefault(require("./component"));
const componentModal_1 = __importDefault(require("./componentModal"));
const components_1 = __importDefault(require("./components"));
const tableComponents_1 = __importDefault(require("./tableComponents"));
const container_1 = __importDefault(require("./container"));
const datagrid_1 = __importDefault(require("./datagrid"));
const day_1 = __importDefault(require("./day"));
const dialog_1 = __importDefault(require("./dialog"));
const editgrid_1 = __importDefault(require("./editgrid"));
const editgridTable_1 = __importDefault(require("./editgridTable"));
const field_1 = __importDefault(require("./field"));
const fieldset_1 = __importDefault(require("./fieldset"));
const file_1 = __importDefault(require("./file"));
const html_1 = __importDefault(require("./html"));
const icon_1 = __importDefault(require("./icon"));
const iconClass_1 = __importDefault(require("./iconClass"));
const input_1 = __importDefault(require("./input"));
const label_1 = __importDefault(require("./label"));
const loader_1 = __importDefault(require("./loader"));
const loading_1 = __importDefault(require("./loading"));
const map_1 = __importDefault(require("./map"));
const message_1 = __importDefault(require("./message"));
const modaldialog_1 = __importDefault(require("./modaldialog"));
const modaledit_1 = __importDefault(require("./modaledit"));
const modalPreview_1 = __importDefault(require("./modalPreview"));
const multipleMasksInput_1 = __importDefault(require("./multipleMasksInput"));
const multiValueRow_1 = __importDefault(require("./multiValueRow"));
const multiValueTable_1 = __importDefault(require("./multiValueTable"));
const panel_1 = __importDefault(require("./panel"));
const pdf_1 = __importDefault(require("./pdf"));
const pdfBuilder_1 = __importDefault(require("./pdfBuilder"));
const pdfBuilderUpload_1 = __importDefault(require("./pdfBuilderUpload"));
const radio_1 = __importDefault(require("./radio"));
const resourceAdd_1 = __importDefault(require("./resourceAdd"));
const select_1 = __importDefault(require("./select"));
const selectOption_1 = __importDefault(require("./selectOption"));
const signature_1 = __importDefault(require("./signature"));
const survey_1 = __importDefault(require("./survey"));
const tab_1 = __importDefault(require("./tab"));
const table_1 = __importDefault(require("./table"));
const tree_1 = __importDefault(require("./tree"));
const partials_1 = __importDefault(require("./tree/partials"));
const webform_1 = __importDefault(require("./webform"));
const well_1 = __importDefault(require("./well"));
const wizard_1 = __importDefault(require("./wizard"));
const wizardHeader_1 = __importDefault(require("./wizardHeader"));
const wizardHeaderClassic_1 = __importDefault(require("./wizardHeaderClassic"));
const wizardHeaderVertical_1 = __importDefault(require("./wizardHeaderVertical"));
const wizardNav_1 = __importDefault(require("./wizardNav"));
const cssClasses_1 = __importDefault(require("./cssClasses"));
const errorsList_1 = __importDefault(require("./errorsList"));
const alert_1 = __importDefault(require("./alert"));
exports.default = Object.assign(Object.assign({ transform(type, text, instance) {
        if (!text) {
            return text;
        }
        let additionalClasses = '';
        switch (type) {
            case 'class':
                if (text === 'form-group') {
                    additionalClasses = 'mb-2 ';
                    if (instance && instance.component.block) {
                        additionalClasses += 'd-grid ';
                    }
                }
                return `${additionalClasses}${Object.prototype.hasOwnProperty.call(this.cssClasses, text.toString()) ? this.cssClasses[text.toString()] : text}`;
        }
        return text;
    }, defaultIconset: 'bi', iconClass: iconClass_1.default,
    cssClasses: cssClasses_1.default,
    address: address_1.default,
    builder: builder_1.default,
    builderComponent: builderComponent_1.default,
    builderComponents: builderComponents_1.default,
    builderEditForm: builderEditForm_1.default,
    builderPlaceholder: builderPlaceholder_1.default,
    builderSidebar: builderSidebar_1.default,
    builderSidebarGroup: builderSidebarGroup_1.default,
    builderWizard: builderWizard_1.default,
    button: button_1.default,
    checkbox: checkbox_1.default,
    columns: columns_1.default,
    component: component_1.default,
    componentModal: componentModal_1.default,
    components: components_1.default,
    tableComponents: tableComponents_1.default,
    container: container_1.default,
    datagrid: datagrid_1.default,
    day: day_1.default,
    dialog: dialog_1.default,
    editgrid: editgrid_1.default,
    editgridTable: editgridTable_1.default,
    field: field_1.default,
    fieldset: fieldset_1.default,
    file: file_1.default,
    html: html_1.default,
    icon: icon_1.default,
    input: input_1.default,
    label: label_1.default,
    loader: loader_1.default,
    loading: loading_1.default,
    map: map_1.default,
    message: message_1.default,
    modaledit: modaledit_1.default,
    modaldialog: modaldialog_1.default,
    modalPreview: modalPreview_1.default,
    multipleMasksInput: multipleMasksInput_1.default,
    multiValueRow: multiValueRow_1.default,
    multiValueTable: multiValueTable_1.default,
    panel: panel_1.default,
    pdf: pdf_1.default,
    pdfBuilder: pdfBuilder_1.default,
    pdfBuilderUpload: pdfBuilderUpload_1.default,
    radio: radio_1.default,
    resourceAdd: resourceAdd_1.default,
    select: select_1.default,
    selectOption: selectOption_1.default,
    signature: signature_1.default,
    survey: survey_1.default,
    tab: tab_1.default,
    table: table_1.default,
    tree: tree_1.default }, partials_1.default), { webform: webform_1.default,
    well: well_1.default,
    wizard: wizard_1.default,
    wizardHeader: wizardHeader_1.default,
    wizardHeaderClassic: wizardHeaderClassic_1.default,
    wizardHeaderVertical: wizardHeaderVertical_1.default,
    wizardNav: wizardNav_1.default,
    errorsList: errorsList_1.default,
    alert: alert_1.default });
