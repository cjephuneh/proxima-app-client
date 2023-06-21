// Get response chats for a particular survey


import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
    // Run the middleware
  await runMiddleware(req, res)
    // create survey response
    if(req.method === 'POST'){
        const { client, survey_id, survey_response } = req.body

        try {
            const { data } = await axios.post(ApiUrls.survey_response, {
                client, survey_id, survey_response
            })

            res.json(data)
        } catch (error) {
            res.json({ message: error.response.data });
        }
    }
}