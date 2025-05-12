import { NumberContext } from "../../../types/contexts";
interface Number {
    form: (context: NumberContext) => string;
    html: (context: NumberContext) => string;
}
declare const number: Number;
export default number;
