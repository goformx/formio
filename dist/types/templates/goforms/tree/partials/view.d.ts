interface TreeViewContext {
    values: Array<string | number>;
    node: {
        hasChildren: boolean;
        collapsed: boolean;
        revertAvailable: boolean;
    };
    readOnly: boolean;
    t: (key: string) => string;
}
declare const _default: (ctx: TreeViewContext) => string;
export default _default;
