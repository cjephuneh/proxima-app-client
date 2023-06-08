//  Register organization admin user

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

/* Route

/api/auth/admin

Response

{
    "username": "testadmin",
    "email": "testadmin@mail.com",
    "first_name": "test",
    "last_name": "admin",
    "phonenumber": "0790001947",
    "gender": "Male",
    "DOB": null,
    "user_type": "admin",
    "tenant_id": 1
}
*/



export default async function handler(req, res) {  
    if(req.method === 'POST'){
        // register admin
        try {
            const { username, email, first_name, last_name, phonenumber, gender, DOB, password, confirm_password, user_type, tenant_id } = req.body

            const { data } = await axios.post(ApiUrls.register_admin, {
                username, email, first_name, last_name, phonenumber, gender, DOB, password, confirm_password, user_type, tenant_id
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

        
        // axios.post(ApiUrls.register_client, {
        //   username, email, first_name, last_name, phonenumber, gender, DOB, user_type,  password, confirm_password
        // }).then(({ data }) => {
        //     if(data.user_type && data.token){
        //         res.status(200).json(data)
        //     } else{
        //         res.status(data.status).json(
        //             data.errors
        //         )
        //     }
        // })
    }
}