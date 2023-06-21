// Activate a user after they have signed up

import runMiddleware from "@/utils/cors"

// TODO: Extract uid, token, and activation token from the req and send it to server

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    res.status(200).json({ note: 'Activate a user after they have signed up' })
  }