import { ApiUrls } from "@/utils/ApiUrls"
import runMiddleware from "@/utils/cors"
import axios from "axios"

export default async function handler(req, res){
    // Run the middleware
  await runMiddleware(req, res)
    if(req.method === 'POST'){
        const { client_id, comment_id } = req.body

        const { data } = await axios.post(`${ApiUrls.likeordislikecomment}?comment_id=${comment_id}&client_id=${client_id}`)
        
        res.json(data)
    }
}