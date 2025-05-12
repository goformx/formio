import type { Templates } from "./templates";
interface GoForms {
    framework: string;
    templates: Templates;
}
declare const goforms: GoForms;
export default goforms;
export { goforms };
export * from "./components";
