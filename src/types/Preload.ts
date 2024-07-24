export type Preload = {
  as: string
  href: string
  type: string
  rel?: "preload" | "prefetch"
  crossorigin?: string
}