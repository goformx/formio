import { SelectOptionHTMLContext } from "../../../types/contexts";

export default function html(context: SelectOptionHTMLContext): string {
  const { selected, option } = context;
  const { label } = option;

  return selected ? label : "";
}
