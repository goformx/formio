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
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: (chunkInfo) => {
          const name = chunkInfo.name.replace("src/", "");
          return name.endsWith(".js") ? name : `${name}.js`;
        },
        format: "cjs",
        compact: false,
      },
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      outDir: "lib",
    }),
  ],
});
