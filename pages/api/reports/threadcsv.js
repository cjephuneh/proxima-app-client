import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { thread_id } = req.body

    axios.get(`${ApiUrls.threadscsv}?thread_id=${thread_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}