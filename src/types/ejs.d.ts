// Basic template data interface for the template package
interface EjsTemplateData {
  // Allow string, number, boolean, or nested objects/arrays
  [key: string]: string | number | boolean | Record<string, unknown> | unknown[];
}

declare module '*.ejs' {
  const content: (data?: Partial<EjsTemplateData>) => string;
  export default content;
}
