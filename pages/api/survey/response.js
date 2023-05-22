// Get response chats for a particular survey


import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    // create survey response
    if(req.method === 'POST'){
    const { client, survey_id, survey_response } = req.body

    axios.post(ApiUrls.survey_response, {
        client, survey_id, survey_response
    }).then(({ data }) => {
        if(data.response_id){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
        })
    }

    // get survey
    if(req.method === 'GET'){
        const { client, survey_id, response_id } = req.body
        
        axios.get(`${ApiUrls.survey}?client=${client}&survey_id=${survey_id}&response_id=${response_id}`)
            .then(({ data }) => {
                res.send(data)
            })
    }   
    
}