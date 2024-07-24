import type { ManifestOptions } from "vite-plugin-pwa"

export const seoConfig = {
  baseURL: "https://cryptors.vercel.app/",
  description: "Encrypt and decrypt data with different algorithms.",
  type: "website",
  image: {
    src: "/img/icons/favicon-512x512.png",
    alt: "Crytors",
    width: 512,
    height: 512
  },
  siteName: "Crytors",
  twitter: {
    card: "summary_large_image",
  }
}


export const manifest: Partial<ManifestOptions> = {
  name: "Crytors",
  short_name: "Crytors",
  description: "Website for encrypt and decrypt data with different algorithms.",
  theme_color: "#d5ff00",
  background_color: "#d5ff00",
  display: "fullscreen",
  icons: [
    {
      src: "/img/icons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/img/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "/img/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
}