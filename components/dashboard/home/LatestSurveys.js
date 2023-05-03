import images from "@/assets/images";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineUser } from 'react-icons/ai'

export default function LatestSurveys({ customerImg, customerName, issueTitle, issueBrief, customerContributions}){
    return (
        <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
            <div className="flex gap-3 items-center w-52">
                {/* <img src={customerImg} alt='user' className="w-12 h-12 object-contain" /> */}
                <AiOutlineUser className="w-9 h-9 border rounded-full p-1" />
                <div>
                    <p className="font-semibold">{customerName?.split(' ')[0] + ' ' + customerName?.split(' ')[1]}</p>
                    <p className="text-sm text-gray-500">{customerName?.split(' ')[2]}</p>
                </div>
            </div>

            <div className='flex-1 ml-40'>
                <p>{issueTitle}</p>
                <p className="text-sm text-gray-500">{issueBrief.length > 60 ? `${issueBrief.slice(0,60)}...` : issueBrief}</p>
            </div>

            <div className='w-96'>
                <p>{customerContributions}</p>
                <p className="text-sm text-gray-500">User contributions</p>
            </div>

            <GrFormNext className="w-7 h-7" />
        </div>
    )
}