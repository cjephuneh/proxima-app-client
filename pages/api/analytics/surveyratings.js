import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { survey } = req.body

    axios.get(`${ApiUrls.surveyratings}?survey=${survey}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}