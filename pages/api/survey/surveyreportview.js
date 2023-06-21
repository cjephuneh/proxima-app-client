import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
    // Run the middleware
  await runMiddleware(req, res)
    // get survey report
    if(req.method === 'GET'){
        const { survey_id } = req.body
        
        axios.get(`${ApiUrls.surveyreportview}?survey_id=${survey_id}`)
            .then(({ data }) => {
                res.send(data)
            })
    }   
    
}