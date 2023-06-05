// For a particular tenant return the comments assoiated with a particular clients

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { thread } = req.body

    axios.get(`${ApiUrls.commentsuserrelation}?thread=${thread}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}