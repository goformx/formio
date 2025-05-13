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

// Export as both default and named export for compatibility
export { goforms };
export default goforms;

// For CJS consumers
if (typeof module !== "undefined" && module.exports) {
  module.exports = goforms;
  module.exports.default = goforms;
}

// Export all components for direct access
export * from "./components";
