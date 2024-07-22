import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import graphql from "@rollup/plugin-graphql";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    graphql(),
  ],
  server: {
    open: true,
    port: 3000,
  },
});
