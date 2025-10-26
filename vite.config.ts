import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactGlobeFrequency",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@react-three/fiber", "@react-three/drei", "three"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@react-three/fiber": "ReactThreeFiber",
          "@react-three/drei": "ReactThreeDrei",
          three: "THREE",
        },
      },
    },
  },
});

