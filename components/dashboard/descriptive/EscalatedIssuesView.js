import IssueCard from "./IssueCard";

export default function EscalatedIssuesView(){
    return (
        <div className="bg-white p-8 rounded w-3/5 flex flex-col">
            <div>
                <h5 className="text-xl font-semibold">Escalated Issues</h5>
                <p className="text-gray-500">Issues that require agent’s attention</p>
            </div>

            <div className="flex-1 mt-5">
                <div className="overflow-y-scroll space-y-4 h-64">
                    <IssueCard /> 
                    <IssueCard /> 
                    <IssueCard /> 
                    <IssueCard /> 
                    <IssueCard /> 
                    <IssueCard /> 
                    <IssueCard />                                
                </div>
            </div>
        </div>
    )
}