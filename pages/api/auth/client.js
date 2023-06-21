// Register users who will seek assistance from organizations

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
  const { username, email, first_name, last_name, phonenumber, gender, DOB, user_type, password, confirm_password } = req.body

  if(req.method === 'POST'){
     const { data } =  await axios.post(ApiUrls.register_client, {
        username, email, first_name, last_name, phonenumber, gender, DOB, user_type,  password, confirm_password
      })

    res.status(200).json(data)
  }
}