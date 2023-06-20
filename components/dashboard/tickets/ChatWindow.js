import { create_tenant_message, resetMessageState, tenant_message } from "@/redux/slice/chat/chatSlice";
import { useEffect, useRef, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { IoSend } from 'react-icons/io5'
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function ChatWindow({selectedChat, setSelectedChat}){
    const dispatch = useDispatch()
    const messagesRef = useRef(null);

    // track typed message state
    const [text, setText] = useState('')

    // fetch messages belonging to a chat
    useEffect(() => {
        if(selectedChat){
            dispatch(tenant_message({
                chat_id: selectedChat
            }))
        }
    }, [dispatch, selectedChat])

    // fetch messages data from store
    const { message, isMessageError, isMessageSuccess, isMessageLoading, isMessageMessage } = useSelector((state) => state.chat)

    // check fetched messages
    useEffect(() => {
        dispatch(resetMessageState())
    }, [message, isMessageError, isMessageSuccess, isMessageLoading, isMessageMessage])

    // handle send message
    const handleSendMessage = () => {
        dispatch(create_tenant_message({
            chat_id: selectedChat,
            text_content: text,
            voice_content: "",
            message_sender: "tenant",
            escalated: "",
            channel: "Website",
            topic: ""
        }))

        setText('')
    }

    // retrieve send message data from store
    const { createtenantmessage, isCreateTenantMessageLoading, isCreateTenantMessageSuccess, isCreateTenantMessageError, isCreateTenantMessageMessage } = useSelector((state) => state.chat)
    
    // Scroll to the bottom of the messages div on page load
    useEffect(() => {
        if (messagesRef.current) {
          messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
      }, [messagesRef, message, isMessageError, isMessageSuccess, isMessageLoading, isMessageMessage]);
    
    return (
        <div className="w-2/5 mb-14 flex flex-col p-3 shadow">
            {
                !selectedChat ? <p className="text-center mt-6 italic text-gray-500">Select a chat to view messages</p> :

                (
                    isMessageLoading ? <p className="text-center mt-6 italic text-gray-500">Loading messages...</p> :

                    (
                        message && 
                        <>
                            <div className="flex justify-end items-center gap-4 py-2">
                                <button className="bg-[#2DABB1] w-fit p-2 rounded-full">
                                    <FaRobot size={24} color='white' />
                                </button>
                                <button onClick={() => setSelectedChat(null)}>
                                    {/* <BiDotsHorizontalRounded color="#2DABB1" size={32} /> */}
                                    <MdClose color="#2DABB1" size={32} />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-hidden">
                                <div className="h-full flex flex-col overflow-y-scroll" ref={messagesRef}>
                                    {
                                        [...message].sort((a, b) => a.message_id - b.message_id).map((msg, i) => (
                                            <div key={i} className={msg.message_sender === 'client' ? "w-3/5 self-end p-2 rounded" : "w-3/5 p-2 rounded"}>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">{msg.message_sender === 'client' ? 'Customer' : 'Organization'}</p>
                                                    <p className="text-sm text-gray-500"></p>
                                                </div>
        
                                                <p className="p-2 mt-2 bg-[#F2F4F7] shadow">{msg.text_content}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="mt-3 mx-2 px-4 py-2 border rounded flex-1">
                                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type your message here" className="w-full bg-transparent focus:outline-none" />
                                </div>
                                <button  onClick={() => handleSendMessage()} className="cursor-pointer">
                                    <IoSend size={30} color="#53B4B0" className="mt-2" />
                                </button>
                            </div>
                        </>
                    )
                )                
            }
            
        </div>
    )
}