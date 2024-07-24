import type { APIRoute } from "astro"
import { createDecipheriv, createHash, randomBytes } from "node:crypto"

export const POST: APIRoute = async ({ request }) => {
  const { algorithm, password, data } = await request.json()

  const [ivhex, buff] = [String(data).slice(0, 32), String(data).slice(32)]
  const key = createHash('sha512')
  .update(password)
  .digest('hex')
  .substring(0, 32)
  const iv = Buffer.from(ivhex, 'hex')
  
  const decipher = createDecipheriv(algorithm, key, iv)
  
  let decrypted = ""
  try {
    decrypted = 
    decipher.update(buff, 'hex', 'utf8') + decipher.final('utf8')
  } catch (e) {
    decrypted = randomBytes(Math.max(Math.floor(Math.random() * 50), 16)).toString('utf8')
  }

  
  return new Response(
    JSON.stringify({
      action: "decrypt",
      result: decrypted
    })
  )
}