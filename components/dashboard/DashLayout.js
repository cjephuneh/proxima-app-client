import { useSelector } from "react-redux";
import DashNav from "./DashNav";
import UserInteractions from "./UserInteractions";
import IssuesWindow from "./home/IssuesWindow";

export default function DashLayout({children}){
        const searchWindowVisible = useSelector((state) => state.search.isSearchWindowVisible)

    return (
        <div className="flex">
            <DashNav />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <UserInteractions />
                <div className="py-3 px-12 bg-gray-100 h-screen overflow-y-scroll">
                    {
                        searchWindowVisible ?
                        <IssuesWindow /> :
                        children
                    }
                </div>
            </div>
        </div>
    )
}