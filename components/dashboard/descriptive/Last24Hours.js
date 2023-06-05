import images from "@/assets/images";

export default function LastTwentyFourHours(){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <h5 className="font-semibold text-xl">In the last 24 hours this has happened</h5>

            <div className="mt-4 border rounded p-6 flex items-center justify-between">
                <h5 className="text-lg font-semibold tracking-wider">You resolved 27,000 issues raised by customers</h5>
                <img src={images.celebrate} alt="celebrate" className="" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-10">
                <div className="flex-1 rounded p-6 border h-60">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-xl font-semibold">Issue channels count</h5>
                        <div className="flex flex-col mt-3">
                            <p className="flex items-center justify-between">
                                <span>Mobile issues</span>
                                <span className="text-gray-500">204 chats</span>
                            </p>
                            <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                        </div>
                        <div className="flex flex-col mt-3">
                            <p className="flex items-center justify-between">
                                <span>Website issues</span>
                                <span className="text-gray-500">204 chats</span>
                            </p>
                            <progress value="60" max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mx-6">
                    <div className="flex items-center gap-10">
                        <p className="text-sm">Percentage issues <br /> covered</p>
                        <select className="bg-transparent border px-2 py-1 rounded">
                            <option value="mobile">Mobile issues</option>
                            <option value="website">Website issues</option>
                        </select>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: `
                        radial-gradient(closest-side, white 89%, transparent 90% 100%),
                        conic-gradient(#50E471 64%, #FFE5D3 0)
                        `
                    
                    }}>
                        <p className="bg-[#50E471] text-white h-[100px] w-[100px] rounded-full flex items-center justify-center"><span className="font-semibold text-2xl">64%</span></p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}