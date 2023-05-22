import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { community_id } = req.body

    axios.get(`${ApiUrls.issuescsv}?community_id=${community_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}