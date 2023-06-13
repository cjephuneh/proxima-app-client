export default function Menu({ chat }){
    return (
        <div className="w-1/5 bg-white rounded p-3 space-y-3 h-fit sticky top-0 left-0">
            <div className="text-[#53B4B0] flex justify-between">
                <p>All</p>
                <p>{chat.length}</p>
            </div>
            {/* <div>
                <p>Blocked</p>
            </div>
            <div>
                <p>Trash</p>
            </div> */}
        </div>
    )
}