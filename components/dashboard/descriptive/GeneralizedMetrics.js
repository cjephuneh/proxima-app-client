export default function GeneralizedMetrics(){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <h5 className="font-semibold text-xl">Generalized Metrics</h5>

            <div className="mt-5 space-y-3">
                <h5 className="text-lg text-gray-700">Community Metrics</h5>
                <div className="flex gap-6">
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Average comments</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Community Growth Rate</p>
                        <p className="text-xl font-semibold">28%</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Community Members</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Community Rating</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Cumulative Comments</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Cumulative issues</p>
                        <p className="text-xl font-semibold">28%</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Unique Comments per Issue</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Cumulative Voice messages</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="border-l p-3 flex flex-col">
                        <p className="text-gray-500">Average Voice Messages per chat</p>
                        <p className="text-xl font-semibold">200</p>
                    </div>
                </div>
            </div>
        </div>
    )
}