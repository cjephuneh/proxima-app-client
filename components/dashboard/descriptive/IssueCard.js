export default function IssueCard(){
    return (
        <div className="flex flex-col">
            <p className="flex items-center justify-between">
                <span>ISSUE WITH maziwa mala 50ML</span>
                <span className="text-gray-500">10 Chats</span>
            </p>
            <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
        </div>
    )
}