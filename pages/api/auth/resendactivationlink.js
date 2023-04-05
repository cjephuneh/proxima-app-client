// Resend invitation link to user incase they did not get one

export default function handler(req, res) {
    res.status(200).json({ note: 'Resend invitation link to user incase they did not get one' })
  }