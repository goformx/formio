import builder from "./builder";
import builderComponent from "./builderComponent";
import builderComponents from "./builderComponents";
import builderEditForm from "./builderEditForm";
import builderPlaceholder from "./builderPlaceholder";
import builderSidebar from "./builderSidebar";
import builderSidebarGroup from "./builderSidebarGroup";
import builderWizard from "./builderWizard";
import button from "./button";
import checkbox from "./checkbox";
import columns from "./columns";
import component from "./component";
import cssClasses from "./cssClasses";
import datagrid from "./datagrid";
import day from "./day";
import editgrid from "./editgrid";
import field from "./field";
import fieldset from "./fieldset";
import file from "./file";
import icon from "./icon";
import iconClass from "./iconClass";
import input from "./input";
import label from "./label";
import loader from "./loader";
import loading from "./loading";
import message from "./message";
import multiValueRow from "./multiValueRow";
import multiValueTable from "./multiValueTable";
import panel from "./panel";
import radio from "./radio";
import resourceAdd from "./resourceAdd";
import select from "./select";
import selectOption from "./selectOption";
import signature from "./signature";
import survey from "./survey";
import tab from "./tab";
import table from "./table";
import tree from "./tree";
import treePartials from "./tree/partials";
import webform from "./webform";
import well from "./well";
import wizard from "./wizard";
import wizardHeader from "./wizardHeader";
import wizardHeaderClassic from "./wizardHeaderClassic";
import wizardHeaderVertical from "./wizardHeaderVertical";
import wizardNav from "./wizardNav";
import alert from "./alert";
import errorsList from "./errorsList";

const columnsMap: Record<string, string> = {
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

interface GoFormsTemplate {
  transform: (type: string, text: string | number) => string;
  defaultIconset: string;
  iconClass: (iconset: string, name: string, spinning?: boolean) => string;
  cssClasses: Record<string, string>;
  builder: unknown;
  builderComponent: unknown;
  builderComponents: unknown;
  builderEditForm: unknown;
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
  radio: unknown;
  resourceAdd: unknown;
  select: unknown;
  selectOption: unknown;
  signature: unknown;
  survey: unknown;
  tab: unknown;
  tree: unknown;
  treeEdit: unknown;
  treeView: unknown;
  table: unknown;
  webform: unknown;
  well: unknown;
  wizard: unknown;
  wizardHeader: unknown;
  wizardHeaderClassic: unknown;
  wizardHeaderVertical: unknown;
  wizardNav: unknown;
  alert: unknown;
  errorsList: unknown;
}

const goforms: GoFormsTemplate = {
  transform(type: string, text: string | number): string {
    if (!text) {
      return text as string;
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
  },
  defaultIconset: "icon",
  iconClass,
  cssClasses,
  builder,
  builderComponent,
  builderComponents,
  builderEditForm,
  builderPlaceholder,
  builderSidebar,
  builderSidebarGroup,
  builderWizard,
  button,
  checkbox,
  columns,
  component,
  datagrid,
  day,
  editgrid,
  field,
  fieldset,
  file,
  icon,
  input,
  label,
  loader,
  loading,
  message,
  multiValueRow,
  multiValueTable,
  panel,
  radio,
  resourceAdd,
  select,
  selectOption,
  signature,
  survey,
  tab,
  tree,
  ...treePartials,
  table,
  webform,
  well,
  wizard,
  wizardHeader,
  wizardHeaderClassic,
  wizardHeaderVertical,
  wizardNav,
  alert,
  errorsList,
};

export default goforms;
