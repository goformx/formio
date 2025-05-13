interface TabFormContext {
  component: {
    verticalLayout?: boolean;
    components: Array<{
      label: string;
    }>;
  };
  currentTab: number;
  tabLinkKey: string;
  tabKey: string;
  tabComponents: string[];
  t: (key: string) => string;
}
declare const _default: (ctx: TabFormContext) => string;
export default _default;
