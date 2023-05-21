// Register users who will seek assistance from organizations

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  const { username, email, first_name, last_name, phonenumber, gender, DOB, user_type, password, confirm_password } = req.body

  if(req.method === 'POST'){
      axios.post(ApiUrls.register_client, {
        username, email, first_name, last_name, phonenumber, gender, DOB, user_type,  password, confirm_password
      }).then(({ data }) => {
          if(data.user_type && data.token){
              res.status(200).json(data)
          } else{
              res.status(data.status).json(
                  data.errors
              )
          }
      })
  }
}