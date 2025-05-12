interface ColumnsContext {
  t: (key: string) => string;
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
declare const _default: (ctx: ColumnsContext) => string;
export default _default;
