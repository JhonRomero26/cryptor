import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest, seoConfig } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always"
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  integrations: [
    icon({
      include: {
        "tabler": ['eye', 'clipboard']
      }
    })
  ],
  compressHTML: true,
  prefetch: true,
  output: "server",
  devToolbar: {
    enabled: true
  },
  site: seoConfig.baseURL,
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"]
    },
    build: {
      minify: 'lightningcss'
    },
    plugins: [VitePWA({
      registerType: 'autoUpdate',
      manifest,
      workbox: {
        globDirectory: ".vercel/output/static",
        globPatterns: ["**/*.{js,css,html,woff2,ttf,eot,ico}"],
        runtimeCaching: [{
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60
            }
          }
        }, {
          urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "fonts",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 30 * 24 * 60 * 60
            }
          }
        }],
        navigateFallback: null
      }
    })]
  },
});