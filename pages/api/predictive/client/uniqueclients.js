import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res){
    // Retrieve unique_clients matching query.
    if(req.method === 'GET'){
        const { unique_clients_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_uniqueclients}?unique_clients_id=${unique_clients_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a unique_clients to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_uniqueclients, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a unique_clients from the database.
    if(req.method === 'DELETE'){
        const { unique_clients_id } = req.body

        axios.delete(`${ApiUrls.predicted_uniqueclients}?unique_clients_id=${unique_clients_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}