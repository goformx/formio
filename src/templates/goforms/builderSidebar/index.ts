import value from "./form";
import type { BuilderSidebarContext } from "../../../types/contexts";

interface BuilderSidebar {
  form: (ctx: BuilderSidebarContext) => string;
}

const builderSidebar: BuilderSidebar = { form: value };

export default builderSidebar;
