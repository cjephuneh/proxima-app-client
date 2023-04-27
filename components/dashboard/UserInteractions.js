import images from "@/assets/images";
import { setSearchValue, setIsSearchWindowVisible } from "@/redux/slice/search/searchSlice";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function UserInteractions(){
    const { pathname } = useRouter()

    const dispatch = useDispatch()

    const [searchWord, setSearchWord] = useState('')

    const updateSearchWordToStore = (value) => {
        dispatch(setSearchValue(value))

        setSearchWord(value)
    }

    const activateSearchWindow = () => {
        dispatch(setIsSearchWindowVisible())
    }

    // const searchRef = useRef(null)

    // useEffect(() => {
    //     if(document.activeElement === searchRef){
    //         console.log('active')
    //     }
    // }, [searchRef])
    
    return (
        <div className={pathname === '/dashboard' ? "flex items-center gap-3 pt-6 pb-6 h-20 w-full shadow justify-between px-12": "flex items-center gap-3 pt-6 pb-6 h-20 w-full shadow justify-end px-12"}>
            <div className={pathname === '/dashboard' ? 'flex items-center gap-1' : 'hidden'}>
                <BsSearch />
                <input type='text' placeholder="Search" value={searchWord} onFocus={() => activateSearchWindow()} onChange={e => updateSearchWordToStore(e.target.value)} className="focus:outline-none px-4 py-2" />
            </div>
            
            <div className="flex gap-5 items-center">
                <AiOutlineBell className="w-8 h-8" />

                <div className='relative'>
                    <div className="absolute text-sm p-1 text-white w-6 h-6 bg-[#4F46E5] rounded-full -right-2 -top-2 flex items-center justify-center">2</div>
                    <AiOutlineMail className="w-8 h-8" />
                </div>

                <div className="relative">
                    <div className="absolute w-4 h-4 bg-[#34B53A] rounded-full -right-1 -bottom-1"></div> 
                    <img src={images.user} alt='img' className="w-10 h-10 object-contain" />
                </div>
            </div>

            
        </div>
    )
}