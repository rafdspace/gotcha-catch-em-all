import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import graphql from "@rollup/plugin-graphql";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    // @ts-ignore
    graphql(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon-180x180.png",
        "pwa-64x64.png",
      ],
      manifest: {
        name: "Pokemon Catch App",
        short_name: "Pokemon Catch App",
        description: "Pokemon Catch Progressive Web App!",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
});
