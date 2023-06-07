// Create a tenant

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

// register tenant
export default async function handler(req, res) {
  if(req.method === 'POST'){
        try {
            const { tenant_name, industry } = req.body
            const { data } = await axios.post(ApiUrls.tenant, {
                tenant_name,
                industry
            })

            res.json(data);
        } catch (error) {
            // Handle the error and send an appropriate response
            // Next.js handles a 400 response as an error and catches it here
            // Extract the error message from the response and return it here
            // make sure not to specify any error codes
            // if you have to, make sure it is a 200(2xx) code

            res.json({ message: error.response.data });
        }
  }
}