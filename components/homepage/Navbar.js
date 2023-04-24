import images from "@/assets/images"
import { useTheme } from "next-themes";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Navbar(){
    // const { systemTheme, theme, setTheme } = useTheme();
    const { pathname } = useRouter()

    // useEffect(() => {
        
    // }, [])
    return (
        <nav className={pathname === '/' ? "flex justify-between px-2 shadow py-2" : "flex justify-between px-2 py-2 shadow bg-white"}>
            <Link href={'/'} className="flex items-center gap-2">
                {
                    pathname === '/' ?

                    <div className="bg-white w-10 h-10 rounded-full">
                        <img src={images.logo} alt="logo" className="w-full h-full rounded-full object-contain p-2" />
                    </div> :

                    <div className="bg-white w-10 h-10 rounded-full">
                            <img src={images.logoLight} alt="logo" className="w-full h-full rounded-full object-contain border p-2" />
                    </div>
                }
                <p className={pathname === '/' ?  "text-2xl font-extrabold text-white" : "text-2xl font-extrabold text-[#2DABB1]"}>Proxima AI</p>
            </Link>

            <Link href={'auth'} className="bg-white flex items-center gap-2 px-4 py-2 rounded">
                <span className="text-black text-lg font-semibold">KE</span>
                <img src={images.flag} alt="flag" className="w-6 h-4" />
            </Link>
        </nav>
    )
}