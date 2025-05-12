import { SelectBoxesContext } from "../../../types/contexts";
interface SelectBoxes {
    form: (context: SelectBoxesContext) => string;
    html: (context: SelectBoxesContext) => string;
}
declare const selectboxes: SelectBoxes;
export default selectboxes;
