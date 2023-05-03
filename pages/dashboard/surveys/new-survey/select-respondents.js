import DashLayout from "@/components/dashboard/DashLayout";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi'

export default function SelectRespondents(){
    const tags = [
        'Finances',
        'Opening hours',
        'Refunds',
        'Promotions',
        'Sales team',
        'Offers'
    ]

    const respondents = [
        { name: "Alice Smith", email: "alice@example.com" },
        { name: "Bob Jones", email: "bob@example.com" },
        { name: "Charlie Brown", email: "charlie@example.com" },
        { name: "Dave Wilson", email: "dave@example.com" },
        { name: "Emily Davis", email: "emily@example.com" }
      ];
      

    const [selectedTags, setSelectedTags] = useState([])

    const selectAndUnselectTags = (tag) => {
        if(selectedTags.includes(tag)){
            setSelectedTags(selectedTags.filter(tg => tg !== tag))
        }else{
            setSelectedTags([...selectedTags, tag])
        }
    }

    return (
        <DashLayout>
            <div className="mx-60">
                <h5 className="text-gray-500 font-semibold">Survey Respondents</h5>

                <div className="mt-4 flex items-center gap-1 border border-gray-300 rounded px-2 py-1 w-fit">
                    <BiSearch />
                    <input type='text' placeholder="Search respondents" className="bg-transparent px-2 py-1 focus:outline-none" />
                </div>

                <div className="mt-4 w-[30rem] flex flex-wrap gap-3">
                    {
                        tags.map((tag, i) => (
                            <button key={i} onClick={() => selectAndUnselectTags(tag)} className={selectedTags.includes(tag) ? "px-5 py-2 bg-[#2DABB1] text-white w-fit rounded" : "px-5 py-2 bg-gray-300 w-fit rounded"}>{tag}</button>
                        ))
                    }
                </div>

                <div className="flex flex-col space-y-3 mt-12">
                    {
                        respondents.map((respondent, i) => (
                            <div key={i} className="flex gap-2 items-start bg-white p-3">
                                <input  type='checkbox' value={respondent.email} className="mt-[0.35rem] accent-[#2DABB1]" />
                                <div className="flex flex-col">
                                    <label>{respondent.name}</label>
                                    <span className="text-sm text-gray-500">{respondent.email}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DashLayout>
    )
}