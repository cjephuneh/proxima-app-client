// Activate a user after they have signed up

// TODO: Extract uid, token, and activation token from the req and send it to server

export default function handler(req, res) {
    res.status(200).json({ note: 'Activate a user after they have signed up' })
  }