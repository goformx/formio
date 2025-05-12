interface TabFlatContext {
  component: {
    components: Array<{
      label: string;
    }>;
  };
  tabComponents: string[];
  t: (key: string) => string;
}
declare const _default: (ctx: TabFlatContext) => string;
export default _default;
