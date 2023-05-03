import Navbar from "@/components/auth/Navbar";

export default function Layout({children}){
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-gray-100">
            <Navbar />
            <div className="mx-auto max-w-screen-xl pt-6 text-black">
                <div className={'overflow-y-scroll'}>
                    {children}
                </div>
            </div>
        </div>
    )
}