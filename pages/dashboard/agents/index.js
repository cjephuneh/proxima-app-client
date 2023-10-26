import DashLayout from "@/components/dashboard/DashLayout";
import { AiOutlinePlus } from "react-icons/ai";

export default function VirtualAgentsConfiguration(){
    return (
        <DashLayout>
            <div className="w-full h-full overflow-hidden">
                <h1 className="font-semibold text-2xl">Virtua
        
    l Agents</h1>
                <div className="mt-5 flex gap-6 h-full">
                   <div className="bg-white w-[10%] rounded p-4 h-fit space-y-3">
                        <button className="w-full bg-[#2DABB1] rounded py-1 text-center text-white">Profile</button>
                        <button className="w-full bg-gray-200 rounded py-1 text-center">Configs</button>
                        <button className="w-full bg-gray-200 rounded py-1 text-center">Data</button>
                        <button className="w-full bg-gray-200 rounded py-1 text-center">Train</button>
                   </div>

                   <div className="w-3/5">
                        <h1 className="font-semibold text-xl mb-3">Edit Profile</h1>
                        <div>
                            <div className="h-60 bg-gray-200 w-full rounded-t-lg relative">
                                <button className="absolute bg-[#2DABB1] p-1 rounded-full shadow bottom-4 left-4">
                                    <AiOutlinePlus size={24} color="white" />
                                </button>
                            </div>
                            <div className="bg-white">
                                <div>
                                    <label></label>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </DashLayout>
    )
}
