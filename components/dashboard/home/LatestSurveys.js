import images from "@/assets/images";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineUser } from 'react-icons/ai'
import { RiSurveyLine } from "react-icons/ri";

export default function LatestSurveys({ survey_topic, survey_description, survey_questions, start_day }){
    return (
        <div className="mx-4 px-6 py-3 gap-8 bg-white flex justify-between items-center">
            <div className="flex gap-2 items-center">
                {/* <img src={customerImg} alt='user' className="w-12 h-12 object-contain" /> */}
                <RiSurveyLine className="w-6 h-6" />
                <div>
                    {/* <p className="font-semibold">{customerName?.split(' ')[0] + ' ' + customerName?.split(' ')[1]}</p>
                    <p className="text-sm text-gray-500">{customerName?.split(' ')[2]}</p> */}
                    <p>{start_day ? start_day : '0000-00-00'}</p>
                </div>
            </div>

            <div className='flex-1'>
                <p>{survey_topic}</p>
                <p className="text-sm text-gray-500">{survey_description.length > 60 ? `${survey_description.slice(0,60)}...` : survey_description}</p>
            </div>

            <div className='mx-8'>
                <p>{Object.keys(survey_questions).length}</p>
                <p className="text-sm text-gray-500">Questions</p>
            </div>

            <div className='mx-8'>
                <p>48</p>
                <p className="text-sm text-gray-500">User contributions</p>
            </div>

            <GrFormNext className="w-7 h-7" />
        </div>
    )
}