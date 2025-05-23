# GoFormX Template

This repository provides templates for form.io forms in GoFormX.

## Installation

```bash
npm install @goformx/formio @formio/js
```

## Usage

```typescript
// Import the main package
import goforms from "@goformx/formio";
// Or import specific components
import { components } from '@goformx/formio/components';

// Use with Form.io
import { Formio } from '@formio/js';

// Register the templates
Formio.use(goforms);
```

## Features

- TypeScript support
- ESM and CommonJS module support
- Bootstrap Icons integration
- Custom form.io templates

## Requirements

- Node.js >= 20.0.0
- @formio/js >= 5.1.1

## License

MIT 