import type { ColumnsContext } from "../../../types/contexts";
interface Columns {
    form: (ctx: ColumnsContext) => string;
}
declare const columns: Columns;
export default columns;
