import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      exposes: {
        ".": "./src/App.tsx",
      },
      manifest: true,
    }),
  ],
  server: {
    open: true,
    port: 5176,
    origin: "http://localhost:5176",
  },
});
