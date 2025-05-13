import { SelectContext, SelectHTMLContext } from "../../../types/contexts";
interface Select {
  form: (context: SelectContext) => string;
  html: (context: SelectHTMLContext) => string;
}
declare const select: Select;
export default select;
