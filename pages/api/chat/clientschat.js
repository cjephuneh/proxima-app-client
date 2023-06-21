// retrieve client chats

import runMiddleware from "@/utils/cors"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    res.status(200).json({ note: 'retrieve client chats' })
  }