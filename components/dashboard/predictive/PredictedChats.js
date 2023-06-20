// export default function PredictedChats(){
//     return (
//         <div className="bg-white p-8 rounded w-2/5">
//             <div className="flex justify-between items-center">
//                 <h5 className="text-xl font-semibold">Total Interactions</h5>
//                 <select className="border bg-transparent rounded px-2 py-1">
//                     <option value="">Filter by</option>
//                 </select>
//             </div>

//             <p className="text-4xl mt-2 tracking-wider font-semibold">4,000,756</p>

//             <div className="mt-4 border rounded-xl p-5 space-y-5">
//                 <h5 className="font-semibold text-xl tracking-wide">Chats created per period</h5>
//                 <div className="flex flex-col">
//                     <p className="flex items-center justify-between">
//                         <span>Last hour</span>
//                         <span className="text-gray-500">204 chats</span>
//                     </p>
//                     <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
//                 </div>

//                 <div className="flex flex-col">
//                     <p className="flex items-center justify-between">
//                         <span>Last 24 hours</span>
//                         <span className="text-gray-500">365 chats</span>
//                     </p>
//                     <progress value="80" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
//                 </div>

//                 <div className="flex flex-col">
//                     <p className="flex items-center justify-between">
//                         <span>Last week</span>
//                         <span className="text-gray-500">7,000,000 chats</span>
//                     </p>
//                     <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { BiError } from "react-icons/bi";
import BounceLoader from "react-spinners/BounceLoader";

export default function PredictedChatAnalytics({ 
    // countchats, isCountChatsError, isCountChatsSuccess, isCountChatsLoading, isCountChatsMessage, 
    // counthourlychats, isCountHourlyChatsError, isCountHourlyChatsSuccess, isCountHourlyChatsLoading, isCountHourlyChatsMessage,
    // averagevoicemessageperchat, isAverageVoiceMessagesPerChatError, isAverageVoiceMessagesPerChatSuccess, isAverageVoiceMessagesPerChatLoading, isAverageVoiceMessagesPerChatMessage
}){
    return (
        <div className="bg-white p-8 rounded w-2/5">
            <div className="flex justify-between items-center">
                <h5 className="text-xl font-semibold">Total Chats</h5>
                {/* <select className="border bg-transparent rounded px-2 py-1">
                    <option value="">Filter by</option>
                </select> */}
            </div>

            <p className="text-4xl mt-2 tracking-wider font-semibold">
                {/* {
                    isCountChatsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                    (
                        isCountChatsSuccess && countchats ?
                        countchats.chat_count :

                        (
                            isCountChatsError && (
                                <BiError color="red" />
                            )
                        )
                    )
                } */}20
            </p>

            <div className="mt-4 border rounded-xl p-5 space-y-5">
                {/* <h5 className="font-semibold text-xl tracking-wide">Chats created per period</h5> */}
                <h5 className="font-semibold text-xl tracking-wide">Chats created in the last hour</h5>
                <div className="flex flex-col">
                    <p className="flex items-center justify-between">
                        {/* <span>Last hour</span> */}
                        <span>Number of chats</span>
                        <span className="text-gray-500">
                        {/* {
                            isCountHourlyChatsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCountHourlyChatsSuccess && counthourlychats ?
                                counthourlychats.total_chats_last_hour :

                                (
                                    isCountHourlyChatsError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        } */}
                        30
                        </span>
                    </p>
                    {/* <progress value={counthourlychats && (counthourlychats.total_chats_last_hour/100)*100} max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress> */}
                    <progress value='60' max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div>

                

                {/* <div className="flex flex-col">
                    <p className="flex items-center justify-between">
                        <span>Last 24 hours</span>
                        <span className="text-gray-500">365 chats</span>
                    </p>
                    <progress value="80" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div>

                <div className="flex flex-col">
                    <p className="flex items-center justify-between">
                        <span>Last week</span>
                        <span className="text-gray-500">7,000,000 chats</span>
                    </p>
                    <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div> */}
            </div>
            <div className="mt-4 border rounded-xl p-5 space-y-5">
                {/* <h5 className="font-semibold text-xl tracking-wide">Chats created per period</h5> */}
                <h5 className="font-semibold text-xl tracking-wide">Average voice messages per chat</h5>
                <div className="flex flex-col">
                    <p className="flex items-center justify-between">
                        {/* <span>Last hour</span> */}
                        <span>Number of voice messages</span>
                        <span className="text-gray-500">
                        {/* {
                            isAverageVoiceMessagesPerChatLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isAverageVoiceMessagesPerChatSuccess && averagevoicemessageperchat ?
                                averagevoicemessageperchat.average_voice_messages_per_chat :

                                (
                                    isAverageVoiceMessagesPerChatError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        } */}20
                        </span>
                    </p>
                    {/* <progress value={averagevoicemessageperchat && (averagevoicemessageperchat.average_voice_messages_per_chat/100)*100} max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress> */}
                    <progress value='12' max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div>
            </div>
        </div>
    )
}