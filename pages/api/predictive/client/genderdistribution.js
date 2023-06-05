import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

// get tenant predicted interactions
export default function handler(req, res){
    // Retrieve gender distribution matching query.
    if(req.method === 'GET'){
        const { gender_distribution_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_genderdistribution}?gender_distribution_id=${gender_distribution_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a gender distribution to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_genderdistribution, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a gender distribution from the database.
    if(req.method === 'DELETE'){
        const { gender_distribution_id } = req.body

        axios.delete(`${ApiUrls.predicted_genderdistribution}?gender_distribution_id=${gender_distribution_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}