import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

// get tenant predicted interactions
export default function handler(req, res){
    // Retrieve interactionss matching query.
    if(req.method === 'GET'){
        const { interactions_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_interactions}?interactions_id=${interactions_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a interaction to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_interactions, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a interaction from the database.
    if(req.method === 'DELETE'){
        const { interactions_id } = req.body

        axios.delete(`${ApiUrls.predicted_interactions}?interactions_id=${interactions_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}