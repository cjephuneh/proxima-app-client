export default function LeastTopics(){
    return(
        <div className="mt-5 bg-white rounded p-4">
            <h5 className="font-semibold text-xl">Least interacted with topics</h5>

            <p className="text-2xl mt-6"><span className="font-bold">Sales</span> was least interacted with this week</p>

            <div className="mt-6 w-1/3 p-5 rounded border">
                <h5 className="font-semibold text-lg">Least interacted count per topic</h5>
                <div className="flex flex-col mt-3">
                    <p className="flex items-center justify-between">
                        <span>Sales</span>
                        <span className="text-gray-500">2 Interactions</span>
                    </p>
                    <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div>
                <div className="flex flex-col mt-3">
                    <p className="flex items-center justify-between">
                        <span>Transport</span>
                        <span className="text-gray-500">2 Interactions</span>
                    </p>
                    <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                </div>
            </div>
        </div>
    )
}