// Cumulative comments issue threads for all issues for tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community } = req.body

    axios.get(`${ApiUrls.cumulativecomments}?community=${community}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}