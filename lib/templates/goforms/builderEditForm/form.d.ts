interface BuilderEditFormContext {
  t: (key: string) => string;
  componentInfo: {
    title: string;
    documentation?: string;
    help?: string;
  };
  iconClass: (name: string) => string;
  preview?: boolean;
  editForm?: string;
}
declare const _default: (ctx: BuilderEditFormContext) => string;
export default _default;
