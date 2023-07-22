import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
});
