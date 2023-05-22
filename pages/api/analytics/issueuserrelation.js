// For a particular tenant return the issues assoiated with a particular clients

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community } = req.body

    axios.get(`${ApiUrls.issueuserrelation}?community=${community}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}