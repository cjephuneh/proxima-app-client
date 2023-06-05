import { useEffect, useRef } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { IoSend } from 'react-icons/io5'

export default function ChatWindow({messages}){
    const messagesRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the messages div on page load
        if (messagesRef.current) {
          messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
      }, []);
    return (
        <div className="w-2/5 mb-14 flex flex-col p-3 shadow">
            <div className="flex justify-end items-center gap-4 py-2">
                <button className="bg-[#2DABB1] w-fit p-2 rounded-full">
                    <FaRobot size={24} color='white' />
                </button>
                <button>
                    <BiDotsHorizontalRounded color="#2DABB1" size={32} />
                </button>
            </div>
            <div className="flex-1 overflow-y-hidden">
                <div className="h-full flex flex-col overflow-y-scroll" ref={messagesRef}>
                    {
                        messages.map((message, i) => (
                            <div key={i} className={i%2 === 0 ? "w-3/5 self-end p-2 rounded" : "w-3/5 p-2 rounded"}>
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-500">{i%2 === 0 ? 'Customer' : 'Organization'}</p>
                                    <p className="text-sm text-gray-500">{message.timeSent.split(' ')[1]}</p>
                                </div>

                                <p className="p-2 mt-2 bg-[#F2F4F7] shadow">{message.message}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-1 items-center">
                <div className="mt-3 mx-2 px-4 py-2 border rounded flex-1">
                    <input type="text" placeholder="Type your message here" className="w-full bg-transparent focus:outline-none" />
                </div>
                <button>
                    <IoSend size={30} color="#53B4B0" className="mt-2" />
                </button>
            </div>
        </div>
    )
}