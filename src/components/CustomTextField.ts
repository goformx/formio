import { Components } from '@formio/js';

export class CustomTextField extends Components.components.textfield {
  static schema() {
    return Components.components.textfield.schema();
  }

  static get builderInfo() {
    return {
      title: 'Custom Text Field',
      group: 'basic',
      icon: 'fa fa-font',
      weight: 0,
      documentation: 'https://formio.github.io/formio.js/app/examples/customcomponents.html',
      schema: CustomTextField.schema(),
    };
  }

  render() {
    // You can override the render method to customize the component's appearance
    return super.render();
  }

  // Add custom methods and properties here
}
