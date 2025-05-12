interface TreeFormContext {
    node: {
        isRoot: boolean;
    };
    view: string;
    content?: string;
    childNodes?: string[];
}
declare const _default: (ctx: TreeFormContext) => string;
export default _default;
