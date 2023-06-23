import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";

export default function GeneralizedMetrics(){
    const {
        // average comments
        averagecomments, isAverageCommentsError, isAverageCommentsSuccess, isAverageCommentsLoading, isAverageCommentsMessage,

        // community growth rate
        communitygrowthrate, isCommunityGrowthRateError, isCommunityGrowthRateSuccess, isCommunityGrowthRateLoading, isCommunityGrowthRateMessage,

        // community members
        communitymembers, isCommunityMembersError, isCommunityMembersSuccess, isCommunityMembersLoading, isCommunityMembersMessage,

        // community rating
        communityrating, isCommunityRatingError, isCommunityRatingSuccess, isCommunityRatingLoading, isCommunityRatingMessage,

        // cumulative comments
        cumulativecomments, isCumulativeCommentsError, isCumulativeCommentsSuccess, isCumulativeCommentsLoading, isCumulativeCommentsMessage,

        // cumulative issues
        cumulativeissues, isCumulativeIssuesError, isCumulativeIssuesSuccess, isCumulativeIssuesLoading, isCumulativeIssuesMessage,

        // unique comments
        uniquecomments, isUniqueCommentsError, isUniqueCommentsSuccess, isUniqueCommentsLoading, isUniqueCommentsMessage,

        // cumulative voice message
        cumulativevoicemessage, isCumulativeVoiceMessageError, isCumulativeVoiceMessageSuccess, isCumulativeVoiceMessageLoading, isCumulativeVoiceMessageMessage,

        // average voice messages per chat
        averagevoicemessageperchat, isAverageVoiceMessagesPerChatError, isAverageVoiceMessagesPerChatSuccess, isAverageVoiceMessagesPerChatLoading, isAverageVoiceMessagesPerChatMessage,

        // survey response rate
        surveyresponserate, isSurveyResponseRateError, isSurveyResponseRateSuccess, isSurveyResponseRateLoading, isSurveyResponseRateMessage,

        // total surveys
        totalsurveys, isTotalSurveysError, isTotalSurveysSuccess, isTotalSurveysLoading, isTotalSurveysMessage,

        // 

    } = useSelector((state) => state.analytics)

    return (
        <>
        <div className="p-4 mt-5 bg-white rounded">
            <h5 className="text-xl font-semibold">Generalized Metrics</h5>

            <div className="mt-5 space-y-3">
                <h5 className="text-lg text-gray-700">Community Metrics</h5>
                <div className="flex gap-6">
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Average comments</p>
                        {
                            isAverageCommentsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isAverageCommentsSuccess && averagecomments ?
                                <p className="text-xl font-semibold">{averagecomments.avg_comments_per_thread}</p> :

                                (
                                    isAverageCommentsError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Community Growth Rate</p>
                        {
                            isCommunityGrowthRateLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCommunityGrowthRateSuccess && communitygrowthrate ?
                                <p className="text-xl font-semibold">{communitygrowthrate.growth_rate} %</p> :

                                (
                                    isCommunityGrowthRateError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Community Members</p>
                        {
                            isCommunityMembersLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCommunityMembersSuccess && communitymembers ?
                                <p className="text-xl font-semibold">{communitymembers.member_count}</p> :

                                (
                                    isCommunityMembersError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Community Rating</p>
                        {
                            isCommunityRatingLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCommunityRatingSuccess && communityrating ?
                                <p className="text-xl font-semibold">{communityrating.count}</p> :

                                (
                                    isCommunityRatingError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Cumulative Comments</p>
                        {
                            isCumulativeCommentsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCumulativeCommentsSuccess && cumulativecomments ?
                                <p className="text-xl font-semibold">{cumulativecomments.count}</p> :

                                (
                                    isCumulativeCommentsError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Cumulative issues</p>
                        {
                            isCumulativeIssuesLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCumulativeIssuesSuccess && cumulativeissues ?
                                <p className="text-xl font-semibold">{cumulativeissues.count}</p> :

                                (
                                    isCumulativeIssuesError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Unique Comments per Issue</p>
                        {
                            isUniqueCommentsLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isUniqueCommentsSuccess && Array.isArray(uniquecomments) ?
                                <p className="text-xl font-semibold">{uniquecomments.reduce((accumulator, element) => accumulator + element.total, 0)}</p> :

                                (
                                    isUniqueCommentsError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Cumulative Voice messages</p>
                        {
                            isCumulativeVoiceMessageLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isCumulativeVoiceMessageSuccess && cumulativevoicemessage ?
                                <p className="text-xl font-semibold">{cumulativevoicemessage.total_voice_size}</p> :

                                (
                                    isCumulativeVoiceMessageError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Average Voice Messages per chat</p>
                        {
                            isAverageVoiceMessagesPerChatLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isAverageVoiceMessagesPerChatSuccess && averagevoicemessageperchat ?
                                <p className="text-xl font-semibold">{averagevoicemessageperchat.average_voice_messages_per_chat}</p> :

                                (
                                    isAverageVoiceMessagesPerChatError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Total Surveys</p>
                        {
                            isTotalSurveysLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isTotalSurveysSuccess && totalsurveys ?
                                <p className="text-xl font-semibold">{totalsurveys.survey_count}</p> :

                                (
                                    isTotalSurveysError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3 border-l">
                        <p className="text-gray-500">Survey Response Rate</p>
                        {
                            isSurveyResponseRateLoading ? <BounceLoader color="#36d7b7" size={20} /> : 

                            (
                                isSurveyResponseRateSuccess && surveyresponserate ?
                                <p className="text-xl font-semibold">{surveyresponserate.response_rate} %</p> :

                                (
                                    isSurveyResponseRateError && (
                                        <BiError color="red" />
                                    )
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}