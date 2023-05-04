import DashNav from "./DashNav";
import UserInteractions from "./UserInteractions";

export default function DashLayout({children}){
    return (
        <div className="flex">
            <DashNav />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <UserInteractions />
                <div className="py-3 px-12 bg-gray-100 h-screen overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}