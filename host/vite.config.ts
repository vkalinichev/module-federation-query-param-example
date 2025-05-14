import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: "http://localhost:5176/mf-manifest.json",
      },
    }),
  ],
  server: {
    open: true,
    port: 5175,
  },
});
