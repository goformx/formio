interface TreeEditContext {
    readOnly?: boolean;
    children: string;
    t: (key: string) => string;
}
declare const _default: (ctx: TreeEditContext) => string;
export default _default;
