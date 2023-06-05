import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    // get survey report
    if(req.method === 'GET'){
        const { survey_id } = req.body
        
        axios.get(`${ApiUrls.surveyreportview}?survey_id=${survey_id}`)
            .then(({ data }) => {
                res.send(data)
            })
    }   
    
}