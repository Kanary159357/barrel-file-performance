import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/non-barrel.tsx",
      name: "viteNonBarrel",
      fileName: "vite-non-barrel",
      formats: ["cjs"],
    },
  },
  plugins: [react({})],
});
