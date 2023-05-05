import images from "@/assets/images";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

export default function EmployeeManagement(){
        const [expandedInfo, setExpandedInfo] = useState([])

        const expandAndCollapseInfo = (title) => {
            if(expandedInfo.includes(title)){
                setExpandedInfo(expandedInfo.filter(info => info !== title))
            } else {
                setExpandedInfo([...expandedInfo, title])
            }
        }
    return (
        <div className="flex gap-6">
            <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">Employee Management</h3>

                <button className="text-[#2DABB1]">+ Add New Employee</button>

                <div className="flex items-center gap-2">
                    <BsSearch />
                    <input type="text" placeholder="Search" className="focus:outline-none bg-transparent px-1 py-2" />
                </div>

                <div>
                    <div className="bg-white rounded p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <img src={images.user} alt='user' className="w-10 h-10 object-contain" />
                            <button className="text-red-500 px-4 py-2 cursor-pointer">Disable Account</button>
                        </div>
                        <p className="font-semibold ">John Doe</p>
                        <div className="mt-3">
                            <p className="font-semibol text-lg">John Doe</p>
                            <p className="text-sm text-gray-500">jogn@email.com</p>

                            <div className="bg-[#2DABB11A] p-2 mt-2 flex flex-col space-y-2 rounded">
                                <div>
                                    <p>Email</p>
                                    <p className="text-sm text-gray-500">jogn@email.com</p>
                                </div>
                                <div>
                                    <p>Phone number</p>
                                    <p className="text-sm text-gray-500">+254 712 345 678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/5 px-3 space-y-3">
            <div className={expandedInfo.includes('general') ? "p-2" : "p-2 shadow"}>
                <button onClick={() => (expandAndCollapseInfo('general'))} className="flex gap-2 items-center cursor-pointer">
                    <GrFormNext />
                    <h5 className="text-sm tracking-wider text-gray-500">GENERAL INFO</h5>
                </button>
                <div className={expandedInfo.includes('general') ? "mt-3 bg-white p-3 rounded" : 'hidden'}>
                    <div className="flex items-center justify-between">
                        <img src={images.user} alt='user' className="w-10 h-10 object-contain" />
                        <button className="text-red-500 px-4 py-2 cursor-pointer">Disable Account</button>
                    </div>

                    <div className="mt-3">
                        <p className="font-semibol text-lg">John Doe</p>
                        <p className="text-sm text-gray-500">jogn@email.com</p>

                        <div className="bg-[#2DABB11A] p-2 mt-2 flex flex-col space-y-2 rounded">
                            <div>
                                <p>Email</p>
                                <p className="text-sm text-gray-500">jogn@email.com</p>
                            </div>
                            <div>
                                <p>Phone number</p>
                                <p className="text-sm text-gray-500">+254 712 345 678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={expandedInfo.includes('tickets') ? "p-2" : "p-2 shadow"}>
                <button onClick={() => (expandAndCollapseInfo('tickets'))} className="flex gap-2 items-center cursor-pointer">
                    <GrFormNext />
                    <h5 className="text-sm tracking-wider text-gray-500">TICKETS RESOLVED</h5>
                </button>
                <div className={expandedInfo.includes('tickets') ? "mt-3 bg-white p-3 rounded" : 'hidden'}>
                    <p className="font-semibold">25,000</p>
                    <p className="text-gray-500">Average count so far</p>
                </div>
            </div>
        </div>
        </div>
    )
}