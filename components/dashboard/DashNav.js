import images from "@/assets/images";
import Link from "next/link";
import { AiOutlineCalendar, AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineHome, AiOutlineSelect } from "react-icons/ai";
import { TbBrandGoogleAnalytics, TbLogout } from 'react-icons/tb'
import { VscIssueDraft } from 'react-icons/vsc'
import { GrAnalytics } from 'react-icons/gr'
import { SlSettings } from 'react-icons/sl'
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiSurveyLine } from 'react-icons/ri'
import { BsChevronBarExpand, BsPerson, BsTicketPerforated } from "react-icons/bs";
import { useState } from "react";
import { MdOutlineBatchPrediction } from "react-icons/md";

export default function DashNav(){
        const [showDetails, setShowDetails] = useState(false)

        // notes => on details show -> icons h-8 w-8 ; else h-5 w-5
    return (
        <aside data-testid='side-nav' className="p-4 h-screen flex flex-col  justify-between shadow">
            <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                    <img src={images.logoLight} className="h-10 w-10 object-contain" />
                    { showDetails && <p className="font-semibold text-2xl text-[#2DABB1]">Proxima AI</p>}
                </div>
                
                <button onClick={() => setShowDetails(!showDetails)} className="absolute -right-8 top-20 border p-1 rounded-full cursor-pointer">
                    {
                        showDetails ?
                        <AiOutlineDoubleLeft size={18} /> :
                        <AiOutlineDoubleRight size={18} />
                        
                    }
                </button>
                
                <hr className="border-t border-gray-200 mb-4" />

                <Link href={'/dashboard'} className="flex mb-8 items-center gap-2">
                    <AiOutlineHome className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Dashboard</p>
                </Link>

                <p className="text-gray-500 text-sm tracking-wider mb-4">ANALYTICS</p>

                <Link href={'/dashboard/analytics'} className="flex mb-8  items-center gap-2">
                    <TbBrandGoogleAnalytics className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Descriptive</p>
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 items-center gap-2">
                    <MdOutlineBatchPrediction className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Predictive</p>
                </Link>

                <p className="text-gray-500 text-sm tracking-wider mb-4">SUPPORT</p>

                <Link href={'/dashboard/tickets'} className="flex mb-8 items-center gap-2">
                    <BsTicketPerforated className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Tickets</p>
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 items-center gap-2">
                    <BsPerson className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Agents</p>
                </Link>

                <Link href={'/dashboard/surveys'} className="flex mb-8 items-center gap-2">
                    <RiSurveyLine className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Survey</p>
                </Link>
            </div>
            <div>
                <Link href={'/dashboard'} className="flex mb-6 items-center gap-2">
                    <SlSettings className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Settings</p>
                </Link>

                <button className="flex mb-6 items-center gap-2">
                    <TbLogout className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Logout</p>
                </button>
            </div>
        </aside>
    )
}