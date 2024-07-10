import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/barrel.tsx",
      name: "viteBarrel",
      fileName: "vite-barrel",
      formats: ["cjs"],
    },
  },
  plugins: [react({})],
});
