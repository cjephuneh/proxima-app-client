import images from "@/assets/images";
import Link from "next/link";
import { AiOutlineCalendar, AiOutlineHome, AiOutlineSelect } from "react-icons/ai";
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { VscIssueDraft } from 'react-icons/vsc'
import { GrAnalytics } from 'react-icons/gr'
import { SlSettings } from 'react-icons/sl'
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiSurveyLine } from 'react-icons/ri'

export default function DashNav(){
    return (
        <aside data-testid='side-nav' className="p-4 h-screen overflow-y-hidden flex flex-col items-center justify-between shadow">
            <div>
                <img src={images.logoLight} className="h-12 w-12 object-contain mb-4" />

                <hr className="border-t border-gray-200 mb-4" />

                <Link href={'/dashboard'} className="flex mb-8 justify-center">
                    <AiOutlineHome className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'dashboard/analytics'} className="flex mb-8 justify-center">
                    <TbBrandGoogleAnalytics className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 justify-center">
                    <AiOutlineSelect className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 justify-center">
                    <TbBrandGoogleAnalytics className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 justify-center">
                    <VscIssueDraft className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 justify-center">
                    <AiOutlineCalendar className="h-8 w-8" color="gray" />
                </Link>

                <Link href={'/dashboard/surveys'} className="flex mb-8 justify-center">
                    <RiSurveyLine className="h-8 w-8" color="gray" />
                </Link>
            </div>
            <Link href={'/dashboard'} className="flex items-center justify-center mb-6">
                <SlSettings className="h-8 w-8" color="gray"  />
            </Link>
        </aside>
    )
}