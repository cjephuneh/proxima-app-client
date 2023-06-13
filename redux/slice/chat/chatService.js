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
    // const res = await axios.post('/api/chat/chat', chatData)

    // return res.data
    try {
        const { data } = await axios.post('/api/chat/chat', chatData)

        console.log('chat', data)

        return data
    } catch (error) {
        throw error
    }
}


/**
 * 
    Add message to a chat
    Fetch all messages belongin to a particular chat
    Delete a message

 */
const message = async(chatData) => {
    // const res = await axios.post('/api/chat/message', chatData)

    // return res.data
    console.log('jdvhew', chatData)
    try {
        const { data } = await axios.post('/api/chat/message', chatData)

        return data
    } catch (error) {
        throw error
    }
}


const chatService = {
    chat,
    message,
}

export default chatService