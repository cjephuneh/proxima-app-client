import images from "@/assets/images";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import BounceLoader from "react-spinners/BounceLoader";

export default function LastTwentyFourHours({
    communicationchannels, isCommunicationChannelsError, isCommunicationChannelsSuccess, isCommunicationChannelsLoading, isCommunicationChannelsMessage
}){
    // track dropdown 
    const [selectedChannel, setSelectedChannel] = useState('mobile')
    return (
        <div className="mt-5 bg-white rounded p-4">
            {/* <h5 className="font-semibold text-xl">In the last 24 hours this has happened</h5> */}

            {/* <div className="mt-4 border rounded p-6 flex items-center justify-between">
                <h5 className="text-lg font-semibold tracking-wider">You resolved 27,000 issues raised by customers</h5>
                <img src={images.celebrate} alt="celebrate" className="" />
            </div> */}

            <div className="mt-4 flex items-center justify-between gap-10">
                <div className="flex-1 rounded p-6 border h-60">
                    <div className="flex flex-col justify-center">
                        {/* <h5 className="text-xl font-semibold">Issue channels count</h5> */}
                        <h5 className="text-xl font-semibold">Communication channels count</h5>
                        <div>
                            {
                                isCommunicationChannelsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                                (
                                    isCommunicationChannelsSuccess && communicationchannels ?
                                    <>
                                        <div className="flex flex-col mt-3">
                                            <p className="flex items-center justify-between">
                                                {/* <span>Mobile issues</span> */}
                                                <span>Mobile app</span>
                                                <span className="text-gray-500">{communicationchannels.mobile_count}</span>
                                            </p>
                                            <progress value={communicationchannels && (communicationchannels.mobile_count/(communicationchannels.website_count + communicationchannels.mobile_count))*100} max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                                        </div>
                                        <div className="flex flex-col mt-3">
                                            <p className="flex items-center justify-between">
                                                {/* <span>Website issues</span> */}
                                                <span>Website</span>
                                                <span className="text-gray-500">{communicationchannels.website_count}</span>
                                            </p>
                                            <progress value={communicationchannels && (communicationchannels.website_count/(communicationchannels.website_count + communicationchannels.mobile_count))*100} max="100" className="rounded-full h-2 bg-[#E2F1FF] text-[#53B4B0]"></progress>
                                        </div>
                                    </> :

                                    (
                                        isCommunicationChannelsError && (
                                            <BiError color="red" />
                                        )
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mx-6">
                    <div className="flex items-center gap-10">
                        {/* <p className="text-sm">Percentage issues <br /> count</p> */}
                        <p className="text-sm">Percentage channels <br /> count</p>
                        <select className="bg-transparent border px-2 py-1 rounded" value={selectedChannel} onChange={e => setSelectedChannel(e.target.value)}>
                            <option value="mobile">Mobile app</option>
                            <option value="website">Website</option>
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
                        conic-gradient(#50E471 ${communicationchannels && 
                            (
                                selectedChannel === 'mobile' ?
                                (communicationchannels.mobile_count/(communicationchannels.website_count + communicationchannels.mobile_count)) :
                                (communicationchannels.website_count/(communicationchannels.website_count + communicationchannels.mobile_count))
                            )
                            
                            *100}%, #FFE5D3 0)
                        `
                    
                    }}>
                        <p className="bg-[#50E471] text-white h-[100px] w-[100px] rounded-full flex items-center justify-center">
                            <span className="font-semibold text-2xl">
                                {communicationchannels && 
                                (
                                    selectedChannel === 'mobile' ?
                                    (communicationchannels.mobile_count/(communicationchannels.website_count + communicationchannels.mobile_count)) :
                                    (communicationchannels.website_count/(communicationchannels.website_count + communicationchannels.mobile_count))
                                )
                                *100}%
                            </span></p>
                    </div>
                </div>
            </div> 
        </div>
    )
}