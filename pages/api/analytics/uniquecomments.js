// Unique comments by clients on issues of a tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community } = req.body

    axios.get(`${ApiUrls.uniquecomments}?community=${community}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}