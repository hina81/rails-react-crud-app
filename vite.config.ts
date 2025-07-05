import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: "./app/frontend/entrypoints/application.tsx",
    },
  },
  plugins: [RubyPlugin(), react()],
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/frontend"),
    },
  },
});
