/*
Create new chat
Update new chat
Retrieve a single chat
Delete a chat
Retrieve tenant chats
Retrieve client chats
*/

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"


export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { tenant, tenant_id, guest_client, chat_owner, client_satisfaction } = req.body

    // retrieve all chats belonging to a client
    if(chat_owner && !tenant && !guest_client && !client_satisfaction){
      const { data } = await axios.get(`${ApiUrls.chat}?chat_owner=${chat_owner}`)

      res.json(data)
    }

    // create chat
    if(tenant_id && chat_owner && client_satisfaction && guest_client){
      try {
        const { data } = await axios.post(ApiUrls.chat, {
          tenant_id, chat_owner, client_satisfaction, guest_client
        })

        res.json(data);
      } catch (error) {
        res.json({ message: error.response.data });
      }
    }
  }

  // if(req.method === 'POST'){
  //     axios.post(ApiUrls.chat, {
  //       tenant, guest_client, chat_owner, client_satisfaction
  //     }).then(({ data }) => {
  //         if(data.chat_id){
  //             res.status(200).json(data)
  //         } else{
  //             res.status(400).json({
  //               message: 'An error occured'
  //             })
  //         }
  //     })
  // }

//   if(req.method === 'GET'){
//     const { chat_id, tenant, chat_owner } = req.body

//     // retrieve all chats
//     if(!chat_id && !tenant && !chat_owner){
//       axios.get(ApiUrls.chat)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }

//     // retrieve a specific chat
//     if(chat_id && !tenant && !chat_owner){
//       axios.get(`${ApiUrls.chat}?chat_id=${chat_id}`)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }

//     // chats belonging to a specific owner
//     if(chat_owner && !chat_id && !tenant){
//       axios.get(`${ApiUrls.chat}?chat_owner=${chat_owner}`)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }

//     // chats belonging to a specific tenant
//     if(tenant && !chat_owner && !chat_id){
//       axios.get(`${ApiUrls.chat}?tenant=${tenant}`)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }

//     // chat owner and tenat specified
//     if(chat_owner && tenant && !chat_id){
//       axios.get(`${ApiUrls.chat}?chat_owner=${chat_id}&tenant=${tenant}`)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }

//     // with all params specified
//     if(tenant && chat_id && chat_owner){
//       axios.get(`${ApiUrls.chat}?tenant={tenant}&chat_id=${chat_id}&chat_owner=${chat_owner}`)
//         .then(({ data }) => {
//           res.status(200).json(data)
//         })
//     }
//   }
}