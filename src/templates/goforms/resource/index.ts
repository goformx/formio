import { ResourceContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface Resource {
  form: (context: ResourceContext) => string;
  html: (context: ResourceContext) => string;
}

const resource: Resource = {
  form,
  html,
};

export default resource;
