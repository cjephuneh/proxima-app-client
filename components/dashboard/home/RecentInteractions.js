import images from "@/assets/images";
import { AiOutlineUser } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function RecentInteractions({ tags, title, description, customers }){
    return (
        <div className="bg-white p-4 rounded w-96">
            <div className="flex gap-3">
                {
                    tags?.map((tag, i) => (
                        <p key={i} className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">{tag}</p>
                    ))
                }                
            </div>

            <h3 className="text-2xl mt-4">{title.length > 30 ? title.slice(0,30)+'...' : title}</h3>

            <p className="mt-4 text-sm text-gray-500">{description.length > 100 ? description.slice(0,100)+'...' : description}</p>

            <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1">
                    {
                        customers?.map((customer, i) => (
                            <img key={i} src={customer} alt='user' className="w-7 h-7 object-contain" />
                            // <AiOutlineUser key={i} className="w-9 h-9 border rounded-full p-1" />
                        ))
                    }
                </div>

                {/* <div className="bg-red-200 w-8 h-8 rounded-full flex items-center justify-center">
                    <TbActivityHeartbeat className='w-7 h-7' color='red' />
                </div> */}
            </div>
        </div>
    )
}