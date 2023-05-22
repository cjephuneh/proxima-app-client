// How frequent clients engage with tenants

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { tenant } = req.body

    axios.get(`${ApiUrls.engagementfrequency}?tenant=${tenant}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}