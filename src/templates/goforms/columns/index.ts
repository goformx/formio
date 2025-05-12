import value from "./form";
import type { ColumnsContext } from "../../../types/contexts";

interface Columns {
  form: (ctx: ColumnsContext) => string;
}

const columns: Columns = { form: value };

export default columns;
