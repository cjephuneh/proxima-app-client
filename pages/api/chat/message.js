/*

    Add message to a chat
    Fetch all messages belongin to a particular chat
    Delete a message

 */

    export default function handler(req, res) {
        res.status(200).json({ note: 'add, fetch, del messages' })
      }