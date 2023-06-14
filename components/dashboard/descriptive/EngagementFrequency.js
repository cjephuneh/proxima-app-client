import BounceLoader from "react-spinners/BounceLoader";
import QuarterCard from "./engagements/QuarterCard";
import { BiError } from "react-icons/bi";

export default function EngagementFrequency({
    engagementfrequency, isEngagementFrequencyError, isEngagementFrequencySuccess, isEngagementFrequencyLoading, isEngagementFrequencyMessage
}){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <h5 className="font-semibold text-xl">Engagement Frequency (This Year)</h5>
            <div className="mt-6 flex gap-4 overflow-x-scroll">
            
                {
                    isEngagementFrequencyLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                    (
                        isEngagementFrequencySuccess && engagementfrequency ?
                        <>
                            <QuarterCard quarter='1st' engagementfrequency={engagementfrequency.slice(0, 3)} />
                            <QuarterCard quarter='2nd' engagementfrequency={engagementfrequency.slice(3, 6)} />
                            <QuarterCard quarter='3rd' engagementfrequency={engagementfrequency.slice(6, 9)} />
                            <QuarterCard quarter='4th' engagementfrequency={engagementfrequency.slice(9, 12)} />
                        </> :

                        (
                            isEngagementFrequencyError && (
                                <BiError color="red" />
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}