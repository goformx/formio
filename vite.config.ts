import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import ejsPlugin from "./src/vite-plugin-ejs";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "goforms",
      fileName: (format) => `goforms.${format}.js`,
    },
    rollupOptions: {
      external: ["@formio/js"],
      output: [
        {
          format: "es",
          dir: "lib",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: (chunkInfo) => {
            const name = chunkInfo.name.replace("src/", "");
            return name.endsWith(".js") ? name : `${name}.js`;
          },
        },
        {
          format: "umd",
          dir: "dist",
          name: "goforms",
          globals: {
            "@formio/js": "Formio",
          },
        },
      ],
    },
    sourcemap: true,
    minify: true,
    commonjsOptions: {
      include: [/\.ejs$/]
    }
  },
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts"],
      rollupTypes: true,
      outDir: "lib",
    }),
    ejsPlugin()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["@formio/js"],
  },
  // Add configuration for handling EJS files in development
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  // Configure how Vite handles different file types
  assetsInclude: ['**/*.ejs']
});
