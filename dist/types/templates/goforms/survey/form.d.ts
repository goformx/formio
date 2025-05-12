interface SurveyFormContext {
    component: {
        values: Array<{
            label: string;
            value: string;
        }>;
        questions: Array<{
            label: string;
            value: string;
        }>;
    };
    self: {
        getInputName: (question: {
            value: string;
        }) => string;
    };
    key: string;
    t: (key: string) => string;
}
declare const _default: (ctx: SurveyFormContext) => string;
export default _default;
