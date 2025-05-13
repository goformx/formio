import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "GoFormsTemplate",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    outDir: "lib",
    rollupOptions: {
      external: ["@formio/js"],
      output: {
        exports: "named",
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
    dts({
      include: ["src/**/*.ts"],
      outDir: "lib",
    }),
  ],
});
