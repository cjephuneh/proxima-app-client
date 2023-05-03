import images from "@/assets/images";
import { setSearchValue, setIsSearchWindowVisible } from "@/redux/slice/search/searchSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import InboxPreview from "./home/InboxPreview";
import NotificationsPreview from "./home/NotificationsPreview";

export default function UserInteractions(){
    const { pathname } = useRouter()

    const dispatch = useDispatch()

    // search
    const [searchWord, setSearchWord] = useState('')

    // mail preview
    const [showInboxPreview, setShowInboxPreview] = useState(false)

    // notifications
    const [showNotificationsPreview, setShowNotificationsPreview] = useState(false)

    const updateSearchWordToStore = (value) => {
        dispatch(setSearchValue(value))

        setSearchWord(value)
    }

    const activateSearchWindow = () => {
        dispatch(setIsSearchWindowVisible())
    }
    
    return (
        <div className={pathname === '/dashboard' ? "relative bg-gray-100 flex items-center gap-3 pt-6 pb-6 h-20 w-full shadow justify-between px-12": "relative bg-gray-100 flex items-center gap-3 pt-6 pb-6 h-20 w-full shadow justify-end px-12"}>
            <div className={pathname === '/dashboard' ? 'flex items-center gap-1' : 'hidden'}>
                <BsSearch />
                <input type='text' placeholder="Search" value={searchWord} onFocus={() => activateSearchWindow()} onChange={e => updateSearchWordToStore(e.target.value)} className="focus:outline-none px-4 py-2 bg-transparent" />
            </div>
            
            <div className="flex gap-5 items-center">
                <button onClick={() => {
                        setShowNotificationsPreview(!showNotificationsPreview)
                        setShowInboxPreview(false)
                    }}
                >
                    <AiOutlineBell className="w-8 h-8" />
                </button>

                <button onClick={() => {
                        setShowInboxPreview(!showInboxPreview)
                        setShowNotificationsPreview(false)
                    }} 
                    className='relative'
                >
                    <div className="absolute text-sm p-1 text-white w-6 h-6 bg-[#FF5C5C] rounded-full -right-2 -top-2 flex items-center justify-center">2</div>
                    <AiOutlineMail className="w-8 h-8" />
                </button>

                <div className="relative">
                    <div className="absolute w-4 h-4 bg-[#34B53A] rounded-full -right-1 -bottom-1"></div> 
                    <img src={images.user} alt='img' className="w-10 h-10 object-contain" />
                </div>
            </div>

            <InboxPreview showInboxPreview={showInboxPreview} />
            <NotificationsPreview showNotificationsPreview={showNotificationsPreview} />
        </div>
    )
}