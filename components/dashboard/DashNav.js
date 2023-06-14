import images from "@/assets/images";
import Link from "next/link";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineHome } from "react-icons/ai";
import { TbBrandGoogleAnalytics, TbLogout } from 'react-icons/tb'
import { SlSettings } from 'react-icons/sl'
import { RiSurveyLine } from 'react-icons/ri'
import { BsPerson, BsTicketPerforated } from "react-icons/bs";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setShowDetails } from "@/redux/slice/dashutils/indexSlice";
import { logout } from "@/redux/slice/auth/authSlice";

export default function DashNav(){
        const dispatch = useDispatch()

        const showDetails = useSelector((state) => state.dashUtils.showDetails)

        const { pathname } = useRouter()

        const router = useRouter()

        // log out the user
        const logoutUser = () => {
            dispatch(logout())
            localStorage.removeItem("proxima_tenant")
            localStorage.removeItem("proxima_admin_details")
            // router.replace('/auth/login')
        }

    return (
        <aside data-testid='side-nav' className="p-4 h-screen flex flex-col  justify-between shadow">
            <div className="relative">
                <div className="mb-6 flex items-center gap-2">
                    <img src={images.logoLight} className="h-10 w-10 object-contain" />
                    { showDetails && <p className="font-semibold text-2xl text-[#2DABB1]">Proxima AI</p>}
                </div>
                
                <button onClick={() => dispatch(setShowDetails())} className="absolute -right-8 top-20 border p-1 rounded-full cursor-pointer">
                    {
                        showDetails ?
                        <AiOutlineDoubleLeft size={18} /> :
                        <AiOutlineDoubleRight size={18} />
                        
                    }
                </button>
                
                <hr className="border-t border-gray-200 mb-4" />

                <Link href={'/dashboard'} className="flex mb-8 items-center gap-2">
                    <AiOutlineHome className={showDetails ? (pathname === '/dashboard' ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname === '/dashboard' ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname === '/dashboard' ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Dashboard</p>
                </Link>

                <p className="text-gray-500 text-sm tracking-wider mb-4">ANALYTICS</p>

                <Link href={'/dashboard/analytics/descriptive'} className="flex mb-8  items-center gap-2">
                    <TbBrandGoogleAnalytics className={showDetails ? (pathname.includes('descriptive') ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname.includes('descriptive') ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname.includes('descriptive') ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Descriptive</p>
                </Link>

                <Link href={'/dashboard/analytics/predictive'} className="flex mb-8 items-center gap-2">
                    <MdOutlineBatchPrediction className={showDetails ? (pathname.includes('predictive') ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname.includes('predictive') ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname.includes('predictive') ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Predictive</p>
                </Link>

                <p className="text-gray-500 text-sm tracking-wider mb-4">SUPPORT</p>

                <Link href={'/dashboard/tickets'} className="flex mb-8 items-center gap-2">
                    <BsTicketPerforated className={showDetails ? (pathname.includes('tickets') ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname.includes('tickets') ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname.includes('tickets') ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Tickets</p>
                </Link>

                <Link href={'/dashboard'} className="flex mb-8 items-center gap-2">
                    <BsPerson className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Agents</p>
                </Link>

                <Link href={'/dashboard/surveys'} className="flex mb-8 items-center gap-2">
                    <RiSurveyLine className={showDetails ? (pathname.includes('surveys') ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname.includes('surveys') ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname.includes('surveys') ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Surveys</p>
                </Link>
            </div>
            <div>
                <Link href={'/dashboard/settings'} className="flex mb-6 items-center gap-2">
                    <SlSettings className={showDetails ? (pathname.includes('settings') ? "h-5 w-5 text-[#2DABB1]" : "h-5 w-5 text-gray-500") : (pathname.includes('settings') ? "h-8 w-8 text-[#2DABB1]" : "h-8 w-8 text-gray-500")} />
                    <p className={showDetails ? (pathname.includes('settings') ? "text-[#2DABB1]" : "text-gray-500") : "hidden"}>Settings</p>
                </Link>

                <button onClick={() => logoutUser()} className="flex mb-6 items-center gap-2">
                    <TbLogout className={showDetails ? "h-5 w-5" : "h-8 w-8"} color="gray" />
                    <p className={showDetails ? "text-gray-500" : "hidden"}>Log out</p>
                </button>
            </div>
        </aside>
    )
}