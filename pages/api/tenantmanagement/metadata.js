//  retrieve tenant metadata

export default function handler(req, res) {
    res.status(200).json({ name: 'metadata' })
  }