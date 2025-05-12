export interface BaseContext {
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
