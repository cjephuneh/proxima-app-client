// Enable a useer to reset their password

import runMiddleware from "@/utils/cors"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    res.status(200).json({ note: 'Enable a useer to reset their password' })
  }