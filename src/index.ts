import templates from "./templates";

const goforms = {
  framework: "goforms",
  templates,
};

export default goforms;
export { goforms };

// For CJS consumers (optional, but robust)
// @ts-ignore
if (typeof module !== "undefined") {
  // @ts-ignore
  module.exports = goforms;
}
