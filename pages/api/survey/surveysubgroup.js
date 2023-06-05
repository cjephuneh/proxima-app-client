import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    // create survey subgroup
    if(req.method === 'POST'){
    const { survey_id, subgroup_name, subgroup_description } = req.body

    axios.post(ApiUrls.surveysubgroup, {
        survey_id, subgroup_name, subgroup_description
    }).then(({ data }) => {
            if(data.survey_subgroups_id){
                res.status(200).json(data)
            } else {
                res.status(400).json(data)
            }
        })
    }

    // get survey subgroup
    if(req.method === 'GET'){
        const { survey_id } = req.body
        
        axios.get(`${ApiUrls.surveysubgroup}?survey_id=${survey_id}`)
            .then(({ data }) => {
                res.send(data)
            })
    }   
    
}