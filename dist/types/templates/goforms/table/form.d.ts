interface TableHeader {
    label: string;
    key: string;
}
interface TableCell {
    value: string;
    className?: string;
}
interface TableContext {
    component: {
        condensed?: boolean;
        header?: TableHeader[];
        striped?: boolean;
        bordered?: boolean;
        hover?: boolean;
    };
    rows: string;
    tableComponents: TableCell[][];
    t: (key: string) => string;
}
declare const _default: (ctx: TableContext) => string;
export default _default;
