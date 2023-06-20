// For a particular tenant return the comments assoiated with a particular clients

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    try {
      const { thread } = req.body

      const { data } = await axios.get(`${ApiUrls.commentsuserrelation}?thread=${thread}`)

      res.json(data)
    } catch (error) {
      res.json({ message: error.response.data });
    }
  }
}