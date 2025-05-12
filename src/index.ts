import templates from "./templates";
import type { Templates } from "./templates";

interface GoForms {
  framework: string;
  templates: Templates;
}

const goforms: GoForms = {
  framework: "goforms",
  templates,
};

export default goforms;
export { goforms };

// For CJS consumers
if (typeof module !== "undefined" && module.exports) {
  module.exports = goforms;
  module.exports.default = goforms;
}

export * from "./components";
