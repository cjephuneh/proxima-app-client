import images from "@/assets/images";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineUser } from 'react-icons/ai'
import { RiSurveyLine } from "react-icons/ri";

export default function LatestSurveys({ customerImg, date, surveyName, surveyDescription, customerContributions}){
    return (
        <div className="mx-4 px-6 py-3 gap-4 bg-white flex justify-between items-center">
            <div className="flex gap-2 items-center">
                {/* <img src={customerImg} alt='user' className="w-12 h-12 object-contain" /> */}
                <RiSurveyLine className="w-6 h-6" />
                <div>
                    {/* <p className="font-semibold">{customerName?.split(' ')[0] + ' ' + customerName?.split(' ')[1]}</p>
                    <p className="text-sm text-gray-500">{customerName?.split(' ')[2]}</p> */}
                    <p>{date}</p>
                </div>
            </div>

            <div className='flex-1'>
                <p>{surveyName}</p>
                <p className="text-sm text-gray-500">{surveyDescription.length > 60 ? `${surveyDescription.slice(0,60)}...` : surveyDescription}</p>
            </div>

            <div className=''>
                <p>{customerContributions}</p>
                <p className="text-sm text-gray-500">User contributions</p>
            </div>

            <GrFormNext className="w-7 h-7" />
        </div>
    )
}