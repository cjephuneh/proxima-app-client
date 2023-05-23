import axios from "axios";
import { ApiUrls } from "@/utils/ApiUrls";

// CALEB: use ApiUrls.search as the search endpoint/url/API route

export default function handler(req, res) {
    
}

// CALEB: Don't pay attention to the code below... please don't delete it either

// const { context, filter } = req.body

//     // make request to base url and attach the context and filter as URL queries
//     if(req.method === 'POST'){
//         axios.post(`${BASE_URL}/api/search?context=${context}&filter=${filter}`)
//             .then(({ data }) => {
//                 res.status(200).json(data)
//             })
//     }