// get tenant predicted topics
import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

// get tenant predicted interactions
export default function handler(req, res){
    // Retrieve topics matching query.
    if(req.method === 'GET'){
        const { topics_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_topics}?topics_id=${topics_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a topic to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_topics, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a topic from the database.
    if(req.method === 'DELETE'){
        const { topics_id } = req.body

        axios.delete(`${ApiUrls.predicted_topics}?topics_id=${topics_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}