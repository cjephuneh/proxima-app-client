// Let users leave the community

import { ApiUrls } from "@/utils/ApiUrls";
import axios from "axios";

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { client_id, community_id} = req.body

    // leave community
    if(client_id && community_id){
      try {
        const { data } = await axios.post(ApiUrls.leavecommunity, {
          client_id, community_id
        })

        res.json(data);
      } catch (error) {
        res.json({ message: error.response.data });
      }
    }
  }
}