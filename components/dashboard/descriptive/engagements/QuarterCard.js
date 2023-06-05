export default function QuarterCard({quarter, months}){
    return (
        <div className="w-1/4 p-6 rounded border">
            <h5 className="text-xl font-semibold">{quarter} Quarter</h5>

            <div>
                {
                    months.map((month, i) => (
                        <div key={i} className="flex flex-col mt-3">
                                <p className="flex items-center justify-between">
                                    <span>{month}</span>
                                    <span className="text-gray-500">204 clients</span>
                                </p>
                                <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}