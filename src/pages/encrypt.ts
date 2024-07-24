import type { APIRoute } from "astro"
import { createCipheriv, createHash, randomBytes } from "node:crypto"

export const POST: APIRoute = async ({ request }) => {
  const { algorithm, password, data } = await request.json()

  const key = createHash('sha512')
    .update(password)
    .digest('hex')
    .substring(0, 32)
  const iv = randomBytes(16)

  const cipher = createCipheriv(algorithm, key, iv)
  const encrypt = 
  cipher.update(data, 'utf8', 'hex') +
  cipher.final('hex')
  
  const result = `${iv.toString('hex')}${encrypt}`

  return new Response(
    JSON.stringify({
      action: "encrypt",
      result
    })
  )
}