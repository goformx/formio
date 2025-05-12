import { EditGridContext } from "../../../types/contexts";
interface EditGrid {
    form: (ctx: EditGridContext) => string;
    html: (ctx: EditGridContext) => string;
}
declare const editgrid: EditGrid;
export default editgrid;
