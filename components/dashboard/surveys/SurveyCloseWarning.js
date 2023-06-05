export default function SurveyCloseWarning({ showWarning, setShowWarning }){
    return (
        <div className={showWarning ? "absolute w-full h-screen bg-gray-100 opacity-[0.95] flex items-center justify-center" : "hidden"}>
            <div className="bg-white shadow rounded py-3 px-6 w-80 mb-40">
                <h5 className="font-semibold">End Survey?</h5>
                <p className="text-gray-500">Do you want to close this survey? Your clients won’t be able to interact with it anymore</p>
                <div className="mt-4 flex justify-between">
                    <button onClick={() => setShowWarning(false)} className="bg-[#FF5C5C] px-8 py-1 rounded text-white">Cancel</button>
                    <button className="bg-[#2DABB1] px-8 py-1 rounded text-white">Close</button>
                </div>
            </div>
        </div>
    )
}