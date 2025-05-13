import { BuilderSidebarContext } from '../../../types/contexts';
interface BuilderSidebar {
    form: (ctx: BuilderSidebarContext) => string;
}
declare const builderSidebar: BuilderSidebar;
export default builderSidebar;
