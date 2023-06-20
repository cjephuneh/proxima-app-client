import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    try {
      const { tenant } = req.body

      const { data } = await axios.get(`${ApiUrls.totalsurveys}?tenant=${tenant}`)

      res.json(data)
    } catch (error) {
      res.json({ message: error.response.data });
    }
  }
}