// Enable user to say they forgot their password

import runMiddleware from "@/utils/cors"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    res.status(200).json({ name: 'John Doe' })
  }