import { defineConfig } from "vite";//vite?
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url));//func?

export default defineConfig({
  plugins: [react(), tailwindcss()],//dictionary in dictionary?
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),//resolve to what?
    },
  },
});
//what is vite? diff bw type scrpit vss java scri[t?]