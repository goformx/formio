import templates from "./templates";
const goforms = {
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
//# sourceMappingURL=index.js.map
