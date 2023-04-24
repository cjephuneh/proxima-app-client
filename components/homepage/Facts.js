export default function Facts(){
    return (
        <div className="">
                <h2 className="text-5xl">Proxima Facts</h2>

                <p className="text-gray-500 mt-8">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br /> amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <div className="mt-32 flex justify-between border border-[#7F60F9] rounded">
                    <div className="w-1/3 flex flex-col justify-center items-center py-16 space-y-2">
                        <p className="text-6xl">1M+</p>
                        <p className="text-gray-500">Tickets Delivered This Month</p>
                    </div>

                    <div className="w-1/3 border-l border-r border-[#7F60F9] flex flex-col justify-center items-center py-16 space-y-2">
                        <p className="text-6xl">53K+</p>
                        <p className="text-gray-500">Active Customers Rate</p>
                    </div>

                    <div className="w-1/3 flex flex-col justify-center items-center py-16 space-y-2">
                        <p className="text-6xl">98.29%</p>
                        <p className="text-gray-500">Customer Satisfaction Rate</p>
                    </div>
                </div>
        </div>
    )
}