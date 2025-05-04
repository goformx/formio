import templates from "./templates";

const goforms = {
  framework: "goforms",
  templates,
};

export default goforms;
export { goforms };

// For CJS consumers (optional, but robust)
// @ts-expect-error: CJS export for Node consumers
if (typeof module !== "undefined") {
  // @ts-expect-error: CJS export for Node consumers
  module.exports = goforms;
}
