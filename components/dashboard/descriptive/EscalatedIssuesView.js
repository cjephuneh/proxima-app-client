import BounceLoader from "react-spinners/BounceLoader";
import IssueCard from "./IssueCard";
import { BiError } from "react-icons/bi";

export default function EscalatedIssuesView({
    issue, isIssueError, isIssueSuccess, isIssueLoading, isIssueMessage
}){
    return (
        <div className="bg-white p-8 rounded w-3/5 flex flex-col">
            <div>
                <h5 className="text-xl font-semibold">Escalated Issues</h5>
                <p className="text-gray-500">Issues that require agent’s attention</p>
            </div>

            <div className="flex-1 mt-5">
                <div className="overflow-y-scroll space-y-4 h-64">
                    {
                        isIssueLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                        (
                            isIssueSuccess && issue ?
                            issue?.map(issue => (
                                <IssueCard key={issue?.issue_id} issue={issue} /> 
                            )) :

                            (
                                isIssueError && (
                                    <BiError color="red" />
                                )
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}