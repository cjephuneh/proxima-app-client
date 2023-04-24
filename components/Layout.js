import { useRouter } from "next/router";
import Navbar from "./homepage/Navbar";

export default function Layout({children}){
    const { pathname } = useRouter()
    return (
        <div className={pathname === '/' ? "mx-auto max-w-screen-xl pt-6 text-white" : "mx-auto max-w-screen-xl pt-6 text-black"}>
            <Navbar />
            <div className={pathname !== '/' && 'bg-gray-50'}>
                {children}
            </div>
        </div>
    )
}