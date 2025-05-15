import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export default function ejsPlugin(): Plugin {
  return {
    name: 'ejs-loader',
    enforce: 'pre',
    resolveId(id, importer) {
      if (id.endsWith('.ejs')) {
        // If it's a relative import and we have an importer, resolve relative to the importer
        if ((id.startsWith('./') || id.startsWith('../')) && importer) {
          const importerDir = path.dirname(importer);
          const resolvedPath = path.resolve(importerDir, id);
          return '\0' + resolvedPath;
        }
        // Otherwise resolve relative to project root
        return '\0' + path.resolve(process.cwd(), id);
      }
    },
    load(id) {
      if (id.startsWith('\0') && id.endsWith('.ejs')) {
        const realId = id.slice(1);
        try {
          const content = fs.readFileSync(realId, 'utf-8');
          return {
            code: `export default ${JSON.stringify(content)};`,
            map: null,
          };
        } catch (error) {
          console.error(`Error loading EJS file: ${realId}`, error);
          throw error;
        }
      }
    },
  };
}
