import images from "@/assets/images";
import { BiUpvote } from "react-icons/bi";
export default function IssueCard({ issue }){
    return (
        <div className="bg-white w-96 p-3 rounded">
            <div className="flex gap-2">
                {
                    issue.tags.map((tag, i) => (
                        <p key={i} className="text-sm bg-[#DAD7FE] px-2 py-1 rounded w-fit">{tag}</p>
                    ))
                }
            </div>

            <img src={images.issuePic} alt="issue-pic" className="mt-4 w-72 h-auto object-contain" />

            <div className="mt-4 flex items-center gap-1">
                <BiUpvote size={16} />
                <p className="text-sm text-gray-500">{issue.upvotes}</p>
            </div>

            <h5 className="text-lg font-semibold mt-2">{issue.title}</h5>

            <p className="mt-2 text-sm text-gray-500">{issue.description}</p>
        </div>
    )
}