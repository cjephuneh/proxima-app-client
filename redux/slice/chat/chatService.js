import axios from "axios";

/**
 * 
    Create new chat
    Update new chat
    Retrieve a single chat
    Delete a chat
    Retrieve tenant chats
    Retrieve client chats

 */
const chat = async(chatData) => {
    const res = await axios.post('/api/chat/chat', chatData)

    return res.data
}


/**
 * 
    Add message to a chat
    Fetch all messages belongin to a particular chat
    Delete a message

 */
const message = async(chatData) => {
    const res = await axios.post('/api/chat/message', chatData)

    return res.data
}


const chatService = {
    chat,
    message,
}

export default chatService