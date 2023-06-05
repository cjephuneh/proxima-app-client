//  retrieve tenant metadata

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { tenant_id } = req.body

      axios.post(ApiUrls.tenant_metadata, {
        tenant_id
      }).then(({ data }) => {
          if(!data.error){
              res.status(200).json(data)
          } else{
              res.status(400).json(data)
          }
      })
  }
}