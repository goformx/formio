import { ResourceContext } from "../../../types/contexts";
interface Resource {
    form: (context: ResourceContext) => string;
    html: (context: ResourceContext) => string;
}
declare const resource: Resource;
export default resource;
