import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { chat_id } = req.body

    axios.get(`${ApiUrls.messagescsv}?chat_id=${chat_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}