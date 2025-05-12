interface EditGridContext {
  t: (key: string) => string;
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
  iconClass: (name: string) => string;
  addAnother: string;
  footer: string;
}
declare const _default: (ctx: EditGridContext) => string;
export default _default;
