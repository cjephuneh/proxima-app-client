import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

// get tenant predicted interactions
export default function handler(req, res){
    // Retrieve EscalatedChatsss matching query.
    if(req.method === 'GET'){
        const { escalated_chats_id, tenant } = req.body

        axios.get(`${ApiUrls.predicted_escalatedchats}?escalated_chats_id=${escalated_chats_id}&tenant=${tenant}`)
            .then(({ data }) => {
                res.json(data)
            })
    }

    // Add a escalated chat to the database.
    if(req.method === 'POST'){
        const { tenant, prediction } = req.body

        axios.post(ApiUrls.predicted_escalatedchats, {
            tenant, prediction
        }).then(({ data }) => {
            res.json(data)
        })
    }

    // Remove a escalated chat from the database.
    if(req.method === 'DELETE'){
        const { escalated_chats_id } = req.body

        axios.delete(`${ApiUrls.predicted_escalatedchats}?escalated_chats_id=${escalated_chats_id}`)
            .then(({ data }) => {
                res.json(data)
            })
    }
}