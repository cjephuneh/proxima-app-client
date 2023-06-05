// Create a tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { tenant_name, industry } = req.body

    axios.post(ApiUrls.tenant, {
        tenant_name, industry
    }).then(({ data }) => {
        if(!data.error){
            res.status(200).json(data)
        } else{
            res.status(400).json(data)
        }
    })
  }
  }