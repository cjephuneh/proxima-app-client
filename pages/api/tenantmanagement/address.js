// Retrieve tenant address
// Create tenant address

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
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