# GoFormX Form.io Templates

Tailwind CSS compatible templates and structural styles for Form.io forms in GoFormX.

## Installation

```bash
npm install @goformx/formio @formio/js
```

## Usage

### Register templates

```typescript
import goforms from "@goformx/formio";
import { Formio } from '@formio/js';

// Register the GoFormX templates
Formio.use(goforms);
```

### Import structural CSS

The package provides lightweight structural styles that use CSS custom properties, designed to work alongside Tailwind CSS without Bootstrap.

```css
/* In your CSS file */
@import '@goformx/formio/css';
```

This replaces the need for `bootstrap.min.css`, `bootstrap-icons.css`, and `formio.full.css`.

### Import specific components (optional)

```typescript
import { components } from '@goformx/formio/components';
```

## Features

- Tailwind CSS compatible structural styles via CSS custom properties
- Inline SVG icons (no icon font dependencies)
- TypeScript support
- ESM and CommonJS module support
- Custom Form.io templates

## Requirements

- Node.js >= 18.0.0
- @formio/js >= 5.1.1

## License

MIT
