import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res){
    // Retrieve growth_rate matching query.
    if(req.method === 'GET'){
        const { growth_rate_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_growthrate}?growth_rate_id=${growth_rate_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a growth_rate to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_growthrate, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a growth_rate from the database.
    if(req.method === 'DELETE'){
        const { growth_rate_id } = req.body

        axios.delete(`${ApiUrls.predicted_growthrate}?growth_rate_id=${growth_rate_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}