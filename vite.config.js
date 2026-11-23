import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),  visualizer({
      open: true, // Automatically opens the report in your browser after building
      filename: 'dist/stats.html', // Where the report file will be saved
      gzipSize: true, // Collects gzip size from source
      brotliSize: true, // Collects brotli size from source
    }),],
});

