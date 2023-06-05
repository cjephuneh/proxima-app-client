// Retrieve a tenant community

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community_id, tenant_id } = req.body

    axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&tenant_id=${tenant_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}