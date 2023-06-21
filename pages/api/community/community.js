// Retrieve a tenant community

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    // const { community_id, tenant_id } = req.body

    // axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&tenant_id=${tenant_id}`)
    //   .then(({ data }) => {
    //     res.status(200).json(data)
    //   })
    // const { data } = await axios.get(`${ApiUrls.community}`)

    // return res.json(data)
    if(req.method === 'POST'){
      const { community_id, tenant_id } = req.body

      // fetch all communities
      if(!community_id && !tenant_id){
        try {
          const { data } = await axios.get(ApiUrls.community)

          res.json(data)
        } catch (error) {
          res.json({ message: error.response.data });
        }
      }

      // fetch a single community
      if(community_id && !tenant_id){
        try {
          const { data } = await axios.get(`${ApiUrls.community}?community_id=${community_id}`)

          res.json(data)
        } catch (error) {
          res.json({ message: error.response.data });
        }
      }
    }
}