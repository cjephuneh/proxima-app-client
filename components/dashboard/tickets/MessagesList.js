import images from "@/assets/images";
import { FaUser } from "react-icons/fa";

export default function MessagesList({chat, selectedChat, setSelectedChat}){
    return (
        <div className="w-1/5 h-full pb-14 overflow-y-scroll">
        {/* unread */}
        <div>
            <h5 className="text-gray-500 tracking-wider">UNREAD</h5>
            {   
                chat.length > 0 ?
                chat.map((cht, id) => (
                    <button key={id} onClick={() => setSelectedChat(cht.chat_id)} className="mt-3 w-full text-left cursor-pointer space-y-1 shadow px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 ">
                                {/* <img src={images.user} alt='user' className='w-10 h-10 object-contain' /> */}
                                <div className="border border-[#2DABB1] rounded-full h-10 w-10 flex items-center justify-center">
                                    <FaUser />
                                </div>
                                <div>
                                    <p className="font-semibold">{cht.chat_owner.first_name} {cht.chat_owner.last_name}</p>
                                    <p className="text-sm text-gray-500">@{cht.chat_owner.username > 8 ? cht.chat_owner.username.slice(0, 8)+'...' : cht.chat_owner.username}</p>
                                </div>
                            </div>

                            {/* <p className="text-sm text-gray-500 w-fit self-end">{message.timeSent.split(' ')[1]}</p> */}
                        </div>
                        {/* <p className="text-sm">{message.message.length > 60 ? message.message.slice(0, 60)+'...' : message.message}</p> */}
                    </button>
                )) :

                <p className="mt-2 text-gray-500 italic">No chats available</p>
            }
        </div>

        {/* read */}
        {/* <div className="mt-4">
            <h5 className="text-gray-500 tracking-wider">READ</h5>
            {
                messages.filter(message => message.read === true).map((message, id) => (
                    <button key={id} className="mt-3 w-full text-left cursor-pointer space-y-1 shadow px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 ">
                                <img src={images.user} alt='user' className='w-10 h-10 object-contain' />
                                <div>
                                    <p className="font-semibold">{message.senderName}</p>
                                    <p className="text-sm text-gray-500">{message.senderEmail.length > 20 ? message.senderEmail.slice(0, 20)+'...' : message.senderEmail}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500">{message.timeSent.split(' ')[1]}</p>
                        </div>
                        <p className="text-sm">{message.message.length > 60 ? message.message.slice(0, 60)+'...' : message.message}</p>
                    </button>
                ))
            }
        </div> */}
    </div>
    )
}