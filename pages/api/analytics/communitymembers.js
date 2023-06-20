// Total number of members belonging to a particular community in atea tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    try {
      const { community } = req.body

      const { data } = await axios.get(`${ApiUrls.communitymembers}?community=${community}`)

      res.json(data)
    } catch (error) {
      res.json({ message: error.response.data });
    }
  }
}