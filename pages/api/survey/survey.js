/*
    Create a survey
 */

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
    // Run the middleware
  await runMiddleware(req, res)
    // create survey
    if(req.method === 'POST'){
    const { tenant_id, survey_topic, survey_description, survey_context, survey_questions, target_audience, survey_type, start_day, end_day } = req.body

    // retrieve community surveys
    if(tenant_id && !survey_topic && !survey_description && !survey_context && !survey_questions && !target_audience && !survey_type && !start_day && !end_day){
        const { data } = await axios.get(`${ApiUrls.survey}?tenant_id=${tenant_id}`)
        res.json(data)
    }


    if(tenant_id && survey_topic && survey_description && survey_context && survey_questions && target_audience && survey_type && start_day && end_day){
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