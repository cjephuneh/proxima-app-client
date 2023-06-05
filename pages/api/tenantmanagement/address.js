// Retrieve tenant address
// Create tenant address

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { tenant_id, city, country, postal_code, state, payment_number } = req.body

      axios.post(ApiUrls.tenant_address, {
        tenant_id, city, country, postal_code, state, payment_number
      }).then(({ data }) => {
          if(!data.error){
              res.status(200).json(data)
          } else{
              res.status(400).json(data)
          }
      })
  }

  if(req.method === 'GET'){
    const { tenant_id } = req.body

      axios.post(ApiUrls.tenant_address, {
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