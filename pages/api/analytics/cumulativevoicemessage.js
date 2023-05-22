// Total number of voice messages sent to all chat associated with a particular tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { tenant } = req.body

    axios.get(`${ApiUrls.cumulativevoicemessage}?tenant=${tenant}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}