import DashLayout from "@/components/dashboard/DashLayout";
import SurveyCloseWarning from "@/components/dashboard/surveys/SurveyCloseWarning";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloseSquare, AiOutlinePlus } from 'react-icons/ai'
import { FcSurvey } from 'react-icons/fc'


export default function Surveys(){
    const surveys = [
        {
          title: "Product satisfaction survey",
          questions: [
            { 
              question: "How satisfied are you with our product?",
              userResponses: [
                { response: "Very satisfied", count: 35 },
                { response: "Somewhat satisfied", count: 40 },
                { response: "Neither satisfied nor dissatisfied", count: 10 },
                { response: "Somewhat dissatisfied", count: 10 },
                { response: "Very dissatisfied", count: 5 }
              ]
            },
            {
              question: "How likely are you to recommend our product to others?",
              userResponses: [
                { response: "Very likely", count: 45 },
                { response: "Somewhat likely", count: 30 },
                { response: "Neutral", count: 10 },
                { response: "Somewhat unlikely", count: 5 },
                { response: "Very unlikely", count: 10 }
              ]
            },
            {
              question: "How frequently do you use our product?",
              userResponses: [
                { response: "Daily", count: 30 },
                { response: "Weekly", count: 35 },
                { response: "Monthly", count: 20 },
                { response: "Less than monthly", count: 10 },
                { response: "Never", count: 5 }
              ]
            }
          ],
          numOfRespondents: 100
        },
        {
            title: "Product features survey",
            questions: [
              {
                question: "Which features do you find most useful in our product?",
                userResponses: [
                  { response: "Ease of use", count: 25 },
                  { response: "Performance", count: 20 },
                  { response: "Design", count: 10 },
                  { response: "Customer support", count: 10 },
                  { response: "Price", count: 5 },
                  { response: "Other", count: 5 }
                ]
              },
              {
                question: "Which features do you find least useful in our product?",
                userResponses: [
                  { response: "Ease of use", count: 5 },
                  { response: "Performance", count: 10 },
                  { response: "Design", count: 15 },
                  { response: "Customer support", count: 10 },
                  { response: "Price", count: 20 },
                  { response: "Other", count: 5 }
                ]
              },
              {
                question: "How important are regular software updates to you?",
                userResponses: [
                  { response: "Very important", count: 30 },
                  { response: "Somewhat important", count: 30 },
                  { response: "Neutral", count: 20 },
                  { response: "Somewhat unimportant", count: 10 },
                  { response: "Not at all important", count: 10 }
                ]
              }
            ],
            numOfRespondents: 75
          },
          {
            title: "Customer service survey",
            questions: [
              {
                question: "How satisfied are you with the customer service you received?",
                userResponses: [
                  { response: "Very satisfied", count: 20 },
                  { response: "Somewhat satisfied", count: 15 },
                  { response: "Neither satisfied nor dissatisfied", count: 5 },
                  { response: "Somewhat dissatisfied", count: 5 },
                  { response: "Very dissatisfied", count: 5 }
                ]
              },
              {
                question: "Were your issues resolved in a timely manner?",
                userResponses: [
                  { response: "Yes", count: 25 },
                  { response: "No", count: 10 },
                  { response: "Not applicable", count: 5 }
                ]
              },
              {
                question: "How knowledgeable was the customer service representative who assisted you?",
                userResponses: [
                  { response: "Very knowledgeable", count: 20 },
                  { response: "Somewhat knowledgeable", count: 15 },
                  { response: "Neutral", count: 5 },
                  { response: "Somewhat unknowledgeable", count: 5 },
                  { response: "Very unknowledgeable", count: 5 }
                ]
              }
            ],
            numOfRespondents: 45
            
            }
    ]

      const [selectedSurvey, setSelectedSurvey] = useState(null)

    //   survey close warning
    const [showWarning, setShowWarning] = useState(false)
      
    return (
        <DashLayout>
            <div className="relative">
                <SurveyCloseWarning showWarning={showWarning} setShowWarning={setShowWarning} />
                <div className="mx-44 space-y-4">
                    <h3 className="text-2xl font-semibold">Your Surveys</h3>

                    <Link href={'surveys/new-survey'} className="flex items-center gap-2 ml-4 text-[#2DABB1]">
                        <AiOutlinePlus />
                        Add a New Survey
                    </Link>

                    <div className="flex gap-6">
                        {/* survey listing */}
                        <div className=" space-y-2">
                            {
                                surveys.map((survey, id) => (
                                    <button key={id} onClick={() => setSelectedSurvey(survey)} className="flex w-full py-2 px-4 bg-white gap-2 rounded">
                                        <FcSurvey size={24} />

                                        <div>
                                            <p className="font-semibold">{survey.title}</p>
                                            <p className="text-sm text-gray-500 text-left">{survey.numOfRespondents} respondents</p>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                        
                        {/* survey preview */}
                        <div className="bg-white flex-1 p-3 rounded">
                            {
                                !selectedSurvey ?

                                <p className="text-center text-gray-500">Select a survey to view details</p> :

                                <div className="">
                                    <div className="flex gap-3 items-center">
                                        <FcSurvey size={24} />
                                        <p className="font-semibold text-xl">{selectedSurvey.title}</p>
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <button className="flex gap-2 items-center bg-gray-100 px-5 py-2 rounded">
                                            <AiOutlinePlus size={20} />
                                            <span>Add a question</span>
                                        </button>

                                        <button onClick={() => setShowWarning(true)} className="flex gap-2 items-center border px-5 py-2 rounded">
                                            <AiOutlineCloseSquare size={20} color="red" />
                                            <span>Close survey</span>
                                        </button>
                                    </div>
                                    
                                    <div className="mt-4 space-y-3">
                                        {
                                            selectedSurvey.questions.map((question, id) => (
                                                <div key={id} className="border rounded p-2">
                                                    <h5>{id + 1}. {question.question}</h5>
                                                    <div className="ml-4 mt-2">
                                                        <h5 className="font-semibold">Responses:</h5>
                                                        <div className="ml-3">
                                                            {
                                                                question.userResponses.map((res, id) => (
                                                                    <p key={id}>{res.response} - <span className="text-gray-500 font-semibold">{res.count} respondents</span></p>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </DashLayout>
    )
}