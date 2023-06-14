import DashLayout from "@/components/dashboard/DashLayout";
import ChatWindow from "@/components/dashboard/tickets/ChatWindow";
import Configuration from "@/components/dashboard/tickets/Configuration";
import Menu from "@/components/dashboard/tickets/Menu";
import MessagesList from "@/components/dashboard/tickets/MessagesList";
import { messages } from "@/components/dashboard/tickets/ticketsPageData";
import { resetChatState, tenant_chat } from "@/redux/slice/chat/chatSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";

export default function Tickets(){
    const dispatch = useDispatch()

    // fetch all chats
    useEffect(() => {
        dispatch(tenant_chat({
            tenant_id: 1
        }))
    }, [])

    // fetch chat data from store
    const { chat, isChatError, isChatSuccess, isChatLoading, isChatMessage } = useSelector((state) => state.chat)

    useEffect(() => {
        console.log(chat, isChatError, isChatSuccess, isChatLoading, isChatMessage)
        // if(chat && isChatSuccess){}
        dispatch(resetChatState())
    }, [chat, isChatError, isChatSuccess, isChatLoading, isChatMessage])

    // track selected chat
    const [selectedChat, setSelectedChat] = useState(null)
    return (
        <DashLayout>
            <div className="w-full h-full overflow-hidden">
                <h1 className="font-semibold text-2xl">All Tickets</h1>
                <div className="mt-5 flex gap-6 h-full">
                    {
                        isChatLoading ?

                        <FadeLoader color="#36d7b7" /> :

                        (
                            chat &&

                            <>
                                <Menu chat={chat} />
                                <MessagesList chat={chat} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
                                <ChatWindow selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
                                <Configuration />
                            </>
                        )
                    }
                </div>
            </div>
        </DashLayout>
    )
}