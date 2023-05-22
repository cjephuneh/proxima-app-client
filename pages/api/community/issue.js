/* 
    Enable users to submit their issues
    Retrieve issues belonging to a particular tenant
*/

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
    // retrieve issue
  if(req.method === 'GET'){
    const { community_id, client_id, issue_id } = req.body

    axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&client_id=${client_id}&issue_id=${issue_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}