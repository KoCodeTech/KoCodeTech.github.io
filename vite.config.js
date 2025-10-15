import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("phaser")) {
              return "phaser"; // Fragmento separado para Phaser
            }
            if (id.includes("react")) {
              return "react"; // Fragmento separado para React
            }
            return "vendor"; // Fragmento para otras dependencias
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Ajusta el límite de advertencia a 1.5 MB
  },
});
