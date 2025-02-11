import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      // Crea `index.d.ts` que re-exporta todos los tipos.
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.stories.*", "**/*.test.*"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "futbol-in-ui",
      fileName: (format) => `futbol-in-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
