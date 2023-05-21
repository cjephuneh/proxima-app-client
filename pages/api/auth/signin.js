// Enable all users to signin

/**
 * 
route: /api/auth/signin

res: 
{
    "email": "employee@mail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZXhwIjoxNjg1ODcyMjU2fQ.aEZSq4gq5_eV2uDFwpEBvm1562aaeMUAFPqOuNw-qfY",
    "user_type": "employee"
}
 */

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    const { email, password } = req.body

    if(req.method === 'POST'){
        axios.post(ApiUrls.signin, {
            email,
            password
        }).then(({ data }) => {
            if(data.token){
                res.status(200).json(data)
            } else{
                res.status(400).json(data.error)
            }
        })
    }
}