import DashLayout from "@/components/dashboard/DashLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function GeneratedQuestions(){
    const surveyQuestions = [
        {
          id: 1,
          title: "Overall satisfaction",
          description: "How satisfied are you with the product as a whole?"
        },
        {
          id: 2,
          title: "Ease of use",
          description: "How easy was it to use the product?"
        },
        {
          id: 3,
          title: "Value for money",
          description: "Do you feel the product was good value for the price you paid?"
        },
        {
          id: 4,
          title: "Customer service",
          description: "How satisfied are you with the customer service provided by the company?"
        },
        {
          id: 5,
          title: "Recommendation",
          description: "Would you recommend this product to others?"
        }
      ];
    
      const router = useRouter()

    const [expandedQuestions, setExpandedQuestions] = useState([])

    const expandAndCollapseQuestions = (id) => {
        if(expandedQuestions.includes(id)){
            setExpandedQuestions(expandedQuestions.filter(questionId => questionId !== id))
        } else {
            setExpandedQuestions([...expandedQuestions, id])
        }
    }

    const confirmQuestions = () => {
        router.push('select-respondents')
    }
    return (
        <DashLayout>
            <div className="flex justify-center mt-20">
                <div className="space-y-4">
                    <h2 className="font-semibold text-3xl text-center">Generated Questions</h2>
                    <p className="text-gray-500 text-sm text-center">
                        Edit the questions as desired and then hit finish to set your survey to live.
                    </p>

                    <div className="bg-white p-2 w-[36rem]">
                        {
                            surveyQuestions.map(question => (
                                <div key={question.id} className="flex items-start space-x-3 border-b p-2">
                                    <button onClick={() => expandAndCollapseQuestions(question.id)} className="mt-[0.35rem] px-1">
                                        {expandedQuestions.includes(question.id) ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                    </button>
                                    <div>
                                        <h5 className="text-lg font-semibold">{question.title}</h5>
                                        <p className={expandedQuestions.includes(question.id) ? "text-sm text-gray-500 mt-2" : "hidden"}>{question.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <button className="bg-white p-2 w-full flex items-center justify-center space-x-3"><AiOutlinePlus /> <span>Add a New Question</span></button>
                    </div>

                    <div className="flex items-center justify-center">
                        <button onClick={() => confirmQuestions()} className="bg-[#2DABB1] text-white px-16 py-2">Finish</button>
                    </div>
                </div>
            </div>
        </DashLayout>
    )
}