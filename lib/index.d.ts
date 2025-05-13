import { Templates } from './templates';
interface GoForms {
    framework: string;
    templates: Templates;
}
declare const goforms: GoForms;
export { goforms };
export default goforms;
export * from './components';
