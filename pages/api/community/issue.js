/* 
    Enable users to submit their issues
    Retrieve issues belonging to a particular tenant
*/

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default async function handler(req, res) {
    // retrieve issue
  if(req.method === 'POST'){
    const { community_id, client_id, issue_id } = req.body

    // retrieve issues belonging to a specific community
    if(community_id && !client_id && !issue_id){
      const { data } =  await axios.get(`${ApiUrls.issue}?community_id=${community_id}`)

      res.json(data)
    }

    // axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&client_id=${client_id}&issue_id=${issue_id}`)
    //   .then(({ data }) => {
    //     res.status(200).json(data)
    //   })
  }
}