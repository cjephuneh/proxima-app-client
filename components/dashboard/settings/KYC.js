export default function KYC(){
    return (
        <div className="space-y-3 w-1/2">
            <h3 className="text-xl font-semibold">KYC Verification Center</h3>
            <div className="bg-white p-4 rounded">
                <p className="font-semibold">Verification documents</p>
                <div className="bg-[#2DABB11A] p-3 mt-3">
                    <p className="font-semibold">Business number</p>
                    <p className="text-gray-500">345346346</p>
                </div>
                <div className="flex gap-4 justify-end mt-3">
                    <button className="text-[#53B4B0] cursor-pointer  px-4 py-2">Change</button>
                    <button className="text-red-500 cursor-pointer px-4 py-2">Delete</button>
                </div>
            </div>
        </div>
    )
}