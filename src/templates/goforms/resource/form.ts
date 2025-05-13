import { ResourceContext } from '../../../types/contexts';

export default function form(context: ResourceContext): string {
  const { component, input } = context;
  const { key, label } = component;
  const { value } = input;

  return `<div class="resource-form">
    <label for="${key}">${label}</label>
    <div class="resource-content">
      ${value || '-'}
    </div>
  </div>`;
} 