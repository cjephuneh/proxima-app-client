/*

    Add message to a chat
    Fetch all messages belongin to a particular chat
    Delete a message

 */

import { ApiUrls } from "@/utils/ApiUrls"
import axios from "axios"

export default function handler(req, res) {
  // create a message
  if(req.method === 'POST'){
    const { chat_id, text_content, voice_content, sent_at, message_sender, escalated, channel, topic } = req.body

    axios.post(ApiUrls.message, {
      chat_id, text_content, voice_content, sent_at, message_sender, escalated, channel, topic
    }).then(({ data }) => {
      if(data.message_id){
        res.status(200).json(data)
      } else {
        res.status(400).json({
          message: 'An error occured'
        })
      }
    })
  }

  // get all messages belonging to a chat
  if(req.method === 'GET'){
    const { chat_id } = req.body

    axios.get(`${ApiUrls.message}?chat_id=${chat_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }

  // delete a message
  if(req.method === 'DELETE'){
    const { chat_id, message_id } = req.body

    axios.delete(`${ApiUrls.message}?chat_id=${chat_id}&message_id=${message_id}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
  }
}