import { ApiUrls } from "@/utils/ApiUrls";
import axios from "axios";

export default async function handler(req, res){
    if(req.method === 'POST'){
        const { client_id, community_id } = req.body

        // retrieve fav communities
        if(client_id && !community_id){
            try {
                const { data } = await axios.get(`${ApiUrls.favoritecommunities}?client_id=${client_id}`)

                res.json(data)
            } catch (error) {
                res.json({ message: error.response.data });
            }
        }

        // add a fav community
        if(client_id && community_id){
            try {
                const { data } = await axios.post(ApiUrls, { client_id, community_id })

                res.json(data)
            } catch (error) {
                res.json({ message: error.response.data });
            }
        }
    }
}