import { Components } from "@formio/js";
export declare class CustomTextField extends Components.components.textfield {
    static schema(): any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: any;
    };
    render(): any;
}
