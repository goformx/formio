import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "goforms",
      fileName: "index",
    },
    rollupOptions: {
      external: ["@formio/js"],
      output: [
        {
          // ESM build with preserved module structure
          format: "es",
          dir: "lib",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
        },
        {
          // UMD build for direct browser usage
          format: "umd",
          dir: "dist",
          name: "goforms",
          entryFileNames: "goforms.umd.js",
          globals: {
            "@formio/js": "Formio",
          },
        }
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
      exclude: ["src/**/*.test.ts", "src/**/*.spec.ts"],
      rollupTypes: true,
      outDir: "lib",
    }),
    ViteEjsPlugin((viteConfig) => ({
      // Add any template data here
      root: viteConfig.root,
    }))
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["@formio/js"],
  },
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  assetsInclude: ['**/*.ejs']
});
