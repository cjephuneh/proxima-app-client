import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res){
    // Retrieve involvements matching query.
    if(req.method === 'GET'){
        const { involvements_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_involvements}?involvements_id=${involvements_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a involvements to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_involvements, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a involvements from the database.
    if(req.method === 'DELETE'){
        const { involvements_id } = req.body

        axios.delete(`${ApiUrls.predicted_involvements}?involvements_id=${involvements_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}