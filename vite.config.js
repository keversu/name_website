import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/process": "http://127.0.0.1:5000",
      "/clear": "http://127.0.0.1:5000",
    },
  },
});
