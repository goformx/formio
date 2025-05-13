"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = __importDefault(require("./builder"));
var builderComponent_1 = __importDefault(require("./builderComponent"));
var builderComponents_1 = __importDefault(require("./builderComponents"));
var builderEditForm_1 = __importDefault(require("./builderEditForm"));
var builderPlaceholder_1 = __importDefault(require("./builderPlaceholder"));
var builderSidebar_1 = __importDefault(require("./builderSidebar"));
var builderSidebarGroup_1 = __importDefault(require("./builderSidebarGroup"));
var builderWizard_1 = __importDefault(require("./builderWizard"));
var button_1 = __importDefault(require("./button"));
var checkbox_1 = __importDefault(require("./checkbox"));
var columns_1 = __importDefault(require("./columns"));
var component_1 = __importDefault(require("./component"));
var cssClasses_1 = __importDefault(require("./cssClasses"));
var datagrid_1 = __importDefault(require("./datagrid"));
var day_1 = __importDefault(require("./day"));
var editgrid_1 = __importDefault(require("./editgrid"));
var field_1 = __importDefault(require("./field"));
var fieldset_1 = __importDefault(require("./fieldset"));
var file_1 = __importDefault(require("./file"));
var icon_1 = __importDefault(require("./icon"));
var iconClass_1 = __importDefault(require("./iconClass"));
var input_1 = __importDefault(require("./input"));
var label_1 = __importDefault(require("./label"));
var loader_1 = __importDefault(require("./loader"));
var loading_1 = __importDefault(require("./loading"));
var message_1 = __importDefault(require("./message"));
var multiValueRow_1 = __importDefault(require("./multiValueRow"));
var multiValueTable_1 = __importDefault(require("./multiValueTable"));
var panel_1 = __importDefault(require("./panel"));
var radio_1 = __importDefault(require("./radio"));
var resourceAdd_1 = __importDefault(require("./resourceAdd"));
var select_1 = __importDefault(require("./select"));
var selectOption_1 = __importDefault(require("./selectOption"));
var signature_1 = __importDefault(require("./signature"));
var survey_1 = __importDefault(require("./survey"));
var tab_1 = __importDefault(require("./tab"));
var table_1 = __importDefault(require("./table"));
var tree_1 = __importDefault(require("./tree"));
var partials_1 = __importDefault(require("./tree/partials"));
var webform_1 = __importDefault(require("./webform"));
var well_1 = __importDefault(require("./well"));
var wizard_1 = __importDefault(require("./wizard"));
var wizardHeader_1 = __importDefault(require("./wizardHeader"));
var wizardHeaderClassic_1 = __importDefault(require("./wizardHeaderClassic"));
var wizardHeaderVertical_1 = __importDefault(require("./wizardHeaderVertical"));
var wizardNav_1 = __importDefault(require("./wizardNav"));
var alert_1 = __importDefault(require("./alert"));
var errorsList_1 = __importDefault(require("./errorsList"));
var columnsMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
};
var goforms = __assign(__assign({ transform: function (type, text) {
        if (!text) {
            return text;
        }
        switch (type) {
            case "columns":
                return Object.prototype.hasOwnProperty.call(columnsMap, text.toString())
                    ? columnsMap[text.toString()]
                    : text.toString();
            case "class":
                return Object.prototype.hasOwnProperty.call(this.cssClasses, text.toString())
                    ? this.cssClasses[text.toString()]
                    : text.toString();
        }
        return text.toString();
    }, defaultIconset: "icon", iconClass: iconClass_1.default, cssClasses: cssClasses_1.default, builder: builder_1.default, builderComponent: builderComponent_1.default, builderComponents: builderComponents_1.default, builderEditForm: builderEditForm_1.default, builderPlaceholder: builderPlaceholder_1.default, builderSidebar: builderSidebar_1.default, builderSidebarGroup: builderSidebarGroup_1.default, builderWizard: builderWizard_1.default, button: button_1.default, checkbox: checkbox_1.default, columns: columns_1.default, component: component_1.default, datagrid: datagrid_1.default, day: day_1.default, editgrid: editgrid_1.default, field: field_1.default, fieldset: fieldset_1.default, file: file_1.default, icon: icon_1.default, input: input_1.default, label: label_1.default, loader: loader_1.default, loading: loading_1.default, message: message_1.default, multiValueRow: multiValueRow_1.default, multiValueTable: multiValueTable_1.default, panel: panel_1.default, radio: radio_1.default, resourceAdd: resourceAdd_1.default, select: select_1.default, selectOption: selectOption_1.default, signature: signature_1.default, survey: survey_1.default, tab: tab_1.default, tree: tree_1.default }, partials_1.default), { table: table_1.default, webform: webform_1.default, well: well_1.default, wizard: wizard_1.default, wizardHeader: wizardHeader_1.default, wizardHeaderClassic: wizardHeaderClassic_1.default, wizardHeaderVertical: wizardHeaderVertical_1.default, wizardNav: wizardNav_1.default, alert: alert_1.default, errorsList: errorsList_1.default });
exports.default = goforms;
