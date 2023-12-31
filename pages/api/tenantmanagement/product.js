
// Create tenant products
// Retrieve tenant products

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
  if(req.method === 'POST'){
    const { tenant_id, name, description, price } = req.body

      axios.post(ApiUrls.tenant_product, {
        tenant_id, name, description, price
      }).then(({ data }) => {
          if(!data.error){
              res.status(200).json(data)
          } else{
              res.status(400).json(data)
          }
      })
  }

  if(req.method === 'GET'){
    const { tenant_id, product_id } = req.body

      axios.post(ApiUrls.tenant_product, {
        tenant_id, product_id
      }).then(({ data }) => {
          if(!data.error){
              res.status(200).json(data)
          } else{
              res.status(400).json(data)
          }
      })
  }


  }
