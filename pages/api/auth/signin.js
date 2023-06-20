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
import runMiddleware from "@/utils/cors"
import axios from "axios"
// import Cors from 'cors'

// // Initializing the cors middleware
// // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// const cors = Cors({
//     methods: ['POST', 'GET', 'HEAD'],
//     origin: '*'
//   });
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
//   function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//       fn(req, res, (result) => {
//         if (result instanceof Error) {
//           return reject(result);
//         }
  
//         return resolve(result);
//       });
//     });
//   }

export default async function handler(req, res) {
    if(req.method === 'POST'){
            // Run the middleware
        //     await runMiddleware(req, res, cors)
        // res.json({ message: 'Hello Everyone!' })
        try {
            // Run the middleware
            await runMiddleware(req, res)

            const {email, password} = req.body
            const { data } = await axios.post(ApiUrls.signin, {
                email,
                password
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