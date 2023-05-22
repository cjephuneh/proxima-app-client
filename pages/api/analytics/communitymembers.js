// Total number of members belonging to a particular community in atea tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community } = req.body

    axios.get(`${ApiUrls.communitymembers}?community=${community}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}