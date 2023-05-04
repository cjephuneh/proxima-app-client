import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { RxDotFilled } from 'react-icons/rx'

export default function Tickets(){
    let messages = [
        {
          senderName: "John Smith",
          senderEmail: "john@example.com",
          timeSent: "2023-05-04 12:30:00",
          message: "Hey, how's it going?",
          read: false
        },
        {
          senderName: "Jane Doe",
          senderEmail: "jane@example.com",
          timeSent: "2023-05-03 14:20:00",
          message: "I'm doing well, thanks for asking!",
          read: true
        },
        {
          senderName: "Bob Johnson",
          senderEmail: "bob@example.com",
          timeSent: "2023-05-02 09:15:00",
          message: "Can you please send me the report?",
          read: true
        },
        {
          senderName: "Alice Lee",
          senderEmail: "alice@example.com",
          timeSent: "2023-05-01 18:05:00",
          message: "Sure, I'll send it over right now.",
          read: true
        },
        {
          senderName: "Tom Smith",
          senderEmail: "tom@example.comfdkjhljlkjhgfd",
          timeSent: "2023-05-01 12:00:00",
          message: "Did you get my email from yesterday Did you get my email from yesterday Did you get my email from yesterday?",
          read: false
        },
        {
          senderName: "Sara Lee",
          senderEmail: "sara@example.com",
          timeSent: "2023-04-30 08:45:00",
          message: "Can we schedule a meeting for next week?",
          read: true
        },
        {
          senderName: "Mike Brown",
          senderEmail: "mike@example.com",
          timeSent: "2023-04-29 16:20:00",
          message: "I need your help with a project.",
          read: false
        },
        {
            senderName: "Sara Lee",
            senderEmail: "sara@example.com",
            timeSent: "2023-04-30 08:45:00",
            message: "Can we schedule a meeting for next week?",
            read: true
          },
          {
            senderName: "Mike Brown",
            senderEmail: "mike@example.com",
            timeSent: "2023-04-29 16:20:00",
            message: "I need your help with a project.",
            read: false
          },
          {
            senderName: "Mike Brown",
            senderEmail: "mike@example.com",
            timeSent: "2023-04-29 16:20:00",
            message: "I need your help with a project.",
            read: false
          },
          {
              senderName: "Sara Lee",
              senderEmail: "sara@example.com",
              timeSent: "2023-04-30 08:45:00",
              message: "Can we schedule a meeting for next week?",
              read: true
            },
            {
              senderName: "Mike Brown",
              senderEmail: "mike@example.com",
              timeSent: "2023-04-29 16:20:00",
              message: "I need your help with a project.",
              read: false
            },
            {
                senderName: "Mike Brown",
                senderEmail: "mike@example.com",
                timeSent: "2023-04-29 16:20:00",
                message: "I need your help with a project.",
                read: false
              },
              {
                  senderName: "Sara Lee",
                  senderEmail: "sara@example.com",
                  timeSent: "2023-04-30 08:45:00",
                  message: "Can we schedule a meeting for next week? kjgyuyu",
                  read: true
                },
                
      ];  
      
      const [expandedInfo, setExpandedInfo] = useState([])

        const expandAndCollapseInfo = (title) => {
            if(expandedInfo.includes(title)){
                setExpandedInfo(expandedInfo.filter(info => info !== title))
            } else {
                setExpandedInfo([...expandedInfo, title])
            }
        }
    return (
        <DashLayout>
            <div className="w-full h-full overflow-hidden">
                <h1 className="font-semibold text-2xl">All Tickets</h1>
                <div className="mt-5 flex gap-6 h-full">
                    {/* Menu */}
                    <div className="w-1/5 bg-white rounded p-3 space-y-3 h-fit sticky top-0 left-0">
                        <div className="text-[#53B4B0] flex justify-between">
                            <p>All</p>
                            <p>15</p>
                        </div>
                        <div>
                            <p>Blocked</p>
                        </div>
                        <div>
                            <p>Trash</p>
                        </div>
                    </div>

                    {/* messages list */}
                    <div className="w-1/5 h-full pb-14 overflow-y-scroll">
                        {/* unread */}
                        <div>
                            <h5 className="text-gray-500 tracking-wider">UNREAD</h5>
                            {
                                messages.filter(message => message.read === false).map((message, id) => (
                                    <button key={id} className="mt-3 w-full text-left cursor-pointer space-y-1 shadow px-4 py-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 ">
                                                <img src={images.user} alt='user' className='w-10 h-10 object-contain' />
                                                <div>
                                                    <p className="font-semibold">{message.senderName}</p>
                                                    <p className="text-sm text-gray-500">{message.senderEmail.length > 20 ? message.senderEmail.slice(0, 20)+'...' : message.senderEmail}</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-500 w-fit self-end">{message.timeSent.split(' ')[1]}</p>
                                        </div>
                                        <p className="text-sm">{message.message.length > 60 ? message.message.slice(0, 60)+'...' : message.message}</p>
                                    </button>
                                ))
                            }
                        </div>

                        {/* read */}
                        <div className="mt-4">
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
                        </div>
                    </div>

                    {/* chat window */}

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
                            <div className="h-full flex flex-col overflow-y-scroll">
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
                        <div className="mt-3 mx-2 px-4 py-2 border rounded">
                            <input type="text" placeholder="Type your message here" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    <div className="w-1/5 px-3 space-y-3">
                        <div className={expandedInfo.includes('general') ? "p-2" : "p-2 shadow"}>
                            <button onClick={() => (expandAndCollapseInfo('general'))} className="flex gap-2 items-center cursor-pointer">
                                <GrFormNext />
                                <h5 className="text-sm tracking-wider text-gray-500">GENERAL INFO</h5>
                            </button>
                            <div className={expandedInfo.includes('general') ? "mt-3 bg-white p-3 rounded" : 'hidden'}>
                                <div className="flex items-center justify-between">
                                    <img src={images.user} alt='user' className="w-10 h-10 object-contain" />
                                    <p className="px-2 py-1 bg-yellow-100 rounded-xl flex gap-2">
                                        <RxDotFilled size={24} color="#EBCE39" />
                                        <span className="text-[#EBCE39]">Replied</span>
                                    </p>
                                </div>

                                <div className="mt-3">
                                    <p className="font-semibol text-lg">John Doe</p>
                                    <p className="text-sm text-gray-500">jogn@email.com</p>

                                    <div className="bg-[#2DABB11A] p-2 mt-2 flex flex-col space-y-2 rounded">
                                        <div>
                                            <p>Email</p>
                                            <p className="text-sm text-gray-500">jogn@email.com</p>
                                        </div>
                                        <div>
                                            <p>Phone number</p>
                                            <p className="text-sm text-gray-500">+254 712 345 678</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={expandedInfo.includes('config') ? "p-2" : "p-2 shadow"}>
                            <button onClick={() => (expandAndCollapseInfo('config'))} className="flex gap-2 items-center cursor-pointer">
                                <GrFormNext />
                                <h5 className="text-sm tracking-wider text-gray-500">CHAT CONFIGURATION</h5>
                            </button>
                            <div className={expandedInfo.includes('config') ? "mt-3 bg-white p-3 rounded" : 'hidden'}>
                                <p>some nice to have config</p>
                            </div>
                        </div>

                        <div className={expandedInfo.includes('agent') ? "p-2" : "p-2 shadow"}>
                            <button onClick={() => (expandAndCollapseInfo('agent'))} className="flex gap-2 items-center cursor-pointer">
                                <GrFormNext />
                                <h5 className="text-sm tracking-wider text-gray-500">VIRTUAL AGENT</h5>
                            </button>
                            <div className={expandedInfo.includes('agent') ? "mt-3 bg-white p-3 rounded" : 'hidden'}>
                                <p>some nice to have config</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashLayout>
    )
}