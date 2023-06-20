// Clients to join a particular community

import { ApiUrls } from "@/utils/ApiUrls";
import axios from "axios";

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { client_id, community_id} = req.body
    
    // join community
    if(client_id && community_id){
      try {
        const { data } = await axios.post(ApiUrls.joincommunity, {
          client_id, community_id
        })

        res.json(data);
      } catch (error) {
        res.json({ message: error.response.data });
      }
    }
  }
}