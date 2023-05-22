import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { tenant_id } = req.body

    axios.get(`${ApiUrls.averagesurveyrunperiod}?tenant_id=${tenant_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}