// City distribution of clients talking to a tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { tenant } = req.body

    axios.get(`${ApiUrls.clientcitydistribution}?tenant=${tenant}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}