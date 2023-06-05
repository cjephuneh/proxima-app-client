// Average number of comments per issue for a tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community } = req.body

    axios.get(`${ApiUrls.averagecomments}?community=${community}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}