export default function QuarterCard({quarter, engagementfrequency}){
    return (
        <div className="w-1/4 p-6 rounded border">
            <h5 className="text-xl font-semibold">{quarter} Quarter</h5>

            <div>
                {
                    engagementfrequency.map((month) => (
                        <div key={month} className="flex flex-col mt-3">
                                <p className="flex items-center justify-between">
                                    <span>{month.month}</span>
                                    <span className="text-gray-500">{month.count} engagements</span>
                                </p>
                                <progress value={(month.count/100)*100} max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}