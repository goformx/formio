interface WebformContext {
    component: {
        title: string;
    };
    t: (key: string) => string;
}
declare const _default: (ctx: WebformContext) => string;
export default _default;
