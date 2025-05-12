import { defineConfig } from "vite";
import { resolve } from "path";
import { execSync } from "child_process";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "GoFormsTemplate",
      fileName: "index",
      formats: ["es", "umd"],
    },
    outDir: "dist",
    rollupOptions: {
      external: ["@formio/js"],
      output: {
        globals: {
          "@formio/js": "Formio",
        },
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "index" ? "index.js" : "chunks/[name].js";
        },
        chunkFileNames: "chunks/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "styles/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    {
      name: "generate-types",
      buildEnd() {
        try {
          execSync("tsc --emitDeclarationOnly", { stdio: "inherit" });
        } catch (error) {
          console.error("Failed to generate type declarations:", error);
          process.exit(1);
        }
      },
    },
  ],
});
