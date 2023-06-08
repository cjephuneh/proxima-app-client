import images from "../../assets/images"
import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="sticky top-0 left-0 flex justify-between px-32 py-5 shadow bg-white">
            <Link href={'/'} className="flex items-center gap-2">
                <div className="bg-white w-10 h-10 rounded-full">
                        <img src={images.logoLight} alt="logo" className="w-full h-full rounded-full object-contain border p-2" />
                </div>
                
                <p className="text-2xl font-extrabold text-[#2DABB1]">Proxima AI</p>
            </Link>

            <Link href={'auth'} className="bg-white flex items-center gap-2 px-4 py-2 rounded">
                <span className="text-black text-lg font-semibold">KE</span>
                <img src={images.flag} alt="flag" className="w-6 h-4" />
            </Link>
        </nav>
    )
}