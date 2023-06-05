// Resend invitation link to user incase they did not get one

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
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