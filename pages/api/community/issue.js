/* 
    Enable users to submit their issues
    Retrieve issues belonging to a particular tenant
*/

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res)
    // retrieve issue
  if(req.method === 'POST'){
    const { community_id, client_id, issue_id, issue, description, solved } = req.body

    // retrieve issues belonging to a specific community
    if(community_id && !client_id && !issue_id){
      const { data } =  await axios.get(`${ApiUrls.issue}?community_id=${community_id}`)

      res.json(data)
    }

    // console.log(client_id , community_id , issue , description , solved)

    // create an issue
    if(client_id && community_id && issue && description && solved===false){
      const { data } =  await axios.post(ApiUrls.issue, { client_id, community_id, issue, description, solved })

      res.json(data)
    }

    // axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&client_id=${client_id}&issue_id=${issue_id}`)
    //   .then(({ data }) => {
    //     res.status(200).json(data)
    //   })
  }
}