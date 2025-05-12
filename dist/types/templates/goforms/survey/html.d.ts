interface SurveyHTMLContext {
    component: {
        questions: Array<{
            label: string;
        }>;
        values: Array<{
            label: string;
        }>;
    };
    t: (key: string) => string;
}
declare const _default: (ctx: SurveyHTMLContext) => string;
export default _default;
