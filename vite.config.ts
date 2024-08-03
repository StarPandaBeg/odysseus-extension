import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), Unfonts({ google: { families: ["Roboto"] } })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
