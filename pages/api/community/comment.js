/* 
    
    Allow user to add their comment to an issue
    Retrieve users comment from an issue
    Retrieve all comments belonging to a particular i

*/

import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res) {
    // Run the middleware
  await runMiddleware(req, res)
    if(req.method === 'POST'){
        const { thread_id, client_id, comment_id, comment_description } = req.body
    
        // retrieve issues belonging to a specific community
        if(thread_id && !client_id && !comment_id){
          const { data } =  await axios.get(`${ApiUrls.comment}?thread_id=${thread_id}`)
    
          res.json(data)
        }

        // save a thread comment
        if(thread_id && client_id && comment_description){
            const { data } = await axios.post(ApiUrls.comment, {thread_id, client_id, comment_description})

            res.json(data)
        }
    
        // axios.get(`${ApiUrls.averagecomments}?community_id=${community_id}&client_id=${client_id}&issue_id=${issue_id}`)
        //   .then(({ data }) => {
        //     res.status(200).json(data)
        //   })
      }
  }