import { Components } from "@formio/js";
import { CustomTextField } from "./CustomTextField";

// Register custom components
export const registerCustomComponents = () => {
  Components.addComponent("customtextfield", CustomTextField);
};

// Export the components for use in the main application
export { Components, CustomTextField };
