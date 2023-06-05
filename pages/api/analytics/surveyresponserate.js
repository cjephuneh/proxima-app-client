import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { survey_id } = req.body

    axios.get(`${ApiUrls.surveyresponserate}?survey_id=${survey_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}