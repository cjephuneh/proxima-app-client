// Retrieve thread of a particular issue

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { thread_id, issue_id } = req.body

    // retrieve issues belonging to a specific community
    if(!thread_id && issue_id){
      const { data } =  await axios.get(`${ApiUrls.thread}?issue_id=${issue_id}`)

      res.json(data)
    }

    // axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&client_id=${client_id}&issue_id=${issue_id}`)
    //   .then(({ data }) => {
    //     res.status(200).json(data)
    //   })
  }
  }