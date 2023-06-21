// Enable all users to signin

import runMiddleware from "@/utils/cors";

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

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Run the middleware
        await runMiddleware(req, res)
        try {
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