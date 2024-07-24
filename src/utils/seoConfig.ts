import type { ManifestOptions } from "vite-plugin-pwa"

export const seoConfig = {
  baseURL: "https://cryptor.vercel.app/",
  description: "Encrypt and decrypt data with different algorithms.",
  type: "website",
  image: {
    src: "/img/icons/favicon-512x512.png",
    alt: "Crytor",
    width: 512,
    height: 512
  },
  siteName: "Crytor",
  twitter: {
    card: "summary_large_image",
  }
}


export const manifest: Partial<ManifestOptions> = {
  name: "Crytor",
  short_name: "Crytor",
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