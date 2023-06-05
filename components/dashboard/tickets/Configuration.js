import images from "@/assets/images"
import { useState } from "react"
import { GrFormNext } from "react-icons/gr"
import { RxDotFilled } from "react-icons/rx"


export default function Configuration(){
        const [expandedInfo, setExpandedInfo] = useState([])

        const expandAndCollapseInfo = (title) => {
            if(expandedInfo.includes(title)){
                setExpandedInfo(expandedInfo.filter(info => info !== title))
            } else {
                setExpandedInfo([...expandedInfo, title])
            }
        }
    return (
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
    )
}