export default function IssueCard({ issue }){
    return (
        <div className="flex flex-col border-t pt-2">
            <p className="flex items-center justify-between">
                <span>{issue.issue}</span>
                {/* <span className="text-gray-500">10 Chats</span> */}
                <span className="text-gray-500">Raised by: {issue.client_id.first_name} {issue.client_id.last_name}</span>
            </p>
            {/* <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress> */}
            <p className="text-sm text-gray-500">{issue.description}</p>

        </div>
    )
}