import QuarterCard from "./engagements/QuarterCard";

export default function EngagementFrequency(){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <h5 className="font-semibold text-xl">Engagement Frequency (This Year)</h5>
            <div className="mt-6 flex gap-4">
                <QuarterCard quarter='1st' months={['January', 'February', 'March']} />
                <QuarterCard quarter='2nd' months={['April', 'May', 'June']} />
                <QuarterCard quarter='3rd' months={['July', 'August', 'September']} />
                <QuarterCard quarter='4th' months={['October', 'November', 'December']} />
            </div>
        </div>
    )
}