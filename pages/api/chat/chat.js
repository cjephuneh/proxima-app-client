/*
Create new chat
Update new chat
Retrieve a single chat
Delete a chat
Retrieve tenant chats
Retrieve client chats
*/


export default function handler(req, res) {
    res.status(200).json({ note: 'chats CRUD' })
  }