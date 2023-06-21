// Resend invitation link to user incase they did not get one

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
    // Run the middleware
  await runMiddleware(req, res)
  const { email } = req.body

  if(req.method === 'POST'){
      axios.post(ApiUrls.signin, {
          email
      }).then(({ data }) => {
          if(!data.error){
              res.status(200).json(data)
          } else{
              res.status(400).json(data)
          }
      })
  }
  }