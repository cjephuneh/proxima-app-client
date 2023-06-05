/*
    Create a survey
 */

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    // create survey
    if(req.method === 'POST'){
    const { tenant_id, survey_topic, survey_description, survey_context, survey_questions, target_audience, survey_type, start_day, end_day } = req.body

    axios.post(ApiUrls.survey, {
        tenant_id, survey_topic, survey_description, survey_context, survey_questions, target_audience, survey_type, start_day, end_day
    }).then(({ data }) => {
        if(data.survey_id){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
        })
    }

    // get survey
    if(req.method === 'GET'){
        const { survey_id } = req.body
        
        axios.get(`${ApiUrls.survey}?survey_id=${survey_id}`)
            .then(({ data }) => {
                res.send(data)
            })
    }   
    
}