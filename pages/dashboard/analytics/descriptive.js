import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import ChatAnalytics from "@/components/dashboard/descriptive/ChatAnalytics";
import EngagementFrequency from "@/components/dashboard/descriptive/EngagementFrequency";
import EscalatedIssuesView from "@/components/dashboard/descriptive/EscalatedIssuesView";
import GeneralizedMetrics from "@/components/dashboard/descriptive/GeneralizedMetrics";
import KnowYourClients from "@/components/dashboard/descriptive/KnowYourClients";
import LastTwentyFourHours from "@/components/dashboard/descriptive/Last24Hours";
import LeastTopics from "@/components/dashboard/descriptive/LeastTopics";
import PopularTopics from "@/components/dashboard/descriptive/PolularTopics";
import { descriptive_averagecomments, descriptive_averagevoicemessageperchat, descriptive_communicationchannels, descriptive_communitygrowthrate, descriptive_communitymembers, descriptive_communityrating, descriptive_countchats, descriptive_counthourlychats, descriptive_cumulativecomments, descriptive_cumulativeissues, descriptive_cumulativevoicemessage, descriptive_engagementfrequency, descriptive_surveyresponserate, descriptive_totalsurveys, descriptive_uniquecomments } from "@/redux/slice/analytics/analyticsSlice";
import { community_issues } from "@/redux/slice/community/communitySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DescriptiveAnalytics(){
    const dispatch = useDispatch()

    // fetch issues data from store
    const {
        issue, isIssueError, isIssueSuccess, isIssueLoading, isIssueMessage
    } = useSelector((state) => state.community)

    // fetch descriptive analytics data from store
    const {
        // count chats 
        countchats, isCountChatsError, isCountChatsSuccess, isCountChatsLoading, isCountChatsMessage, 

        // count hourly chats
        counthourlychats, isCountHourlyChatsError, isCountHourlyChatsSuccess, isCountHourlyChatsLoading, isCountHourlyChatsMessage,

        // average voice messages per chat
        averagevoicemessageperchat, isAverageVoiceMessagesPerChatError, isAverageVoiceMessagesPerChatSuccess, isAverageVoiceMessagesPerChatLoading, isAverageVoiceMessagesPerChatMessage,

        // communication channels
        communicationchannels, isCommunicationChannelsError, isCommunicationChannelsSuccess, isCommunicationChannelsLoading, isCommunicationChannelsMessage,

        // engagement frequency
        engagementfrequency, isEngagementFrequencyError, isEngagementFrequencySuccess, isEngagementFrequencyLoading, isEngagementFrequencyMessage,

    } = useSelector((state) => state.analytics)

    // fetch data on page load
    useEffect(() => {
        // countchats
        dispatch(descriptive_countchats({
            tenant: 1
        }))

        // counthourlychats
        dispatch(descriptive_counthourlychats({
            tenant: 1
        }))

        // averagevoicemessageperchat
        dispatch(descriptive_averagevoicemessageperchat({
            tenant: 1
        }))

        // issues
        dispatch(community_issues({
            community_id: 1
        }))

        // communication channels
        dispatch(descriptive_communicationchannels({
            tenant: 1
        }))

        // engagement frequency
        dispatch(descriptive_engagementfrequency({
            tenant: 1
        }))

        // average comments
        dispatch(descriptive_averagecomments({
            community: 1
        }))

        // community growth rate
        dispatch(descriptive_communitygrowthrate({
            community: 1
        }))

        // community members
        dispatch(descriptive_communitymembers({
            community: 1
        }))

        // community rating
        dispatch(descriptive_communityrating({
            community: 1
        }))

        // cumulative comments
        dispatch(descriptive_cumulativecomments({
            community: 1
        }))

        // cumulative issues
        dispatch(descriptive_cumulativeissues({
            community: 1
        }))

        // unique comments
        dispatch(descriptive_uniquecomments({
            community: 1
        }))

        // cumulative voice messages
        dispatch(descriptive_cumulativevoicemessage({
            tenant: 1
        }))

        // total surveys
        dispatch(descriptive_totalsurveys({
            tenant: 1
        }))

        // survey response rate
        dispatch(descriptive_surveyresponserate({
            survey: 1
        }))

    }, [dispatch])
    return (
        <DashLayout>
            <div>
                <div className="flex gap-8">
                    <ChatAnalytics 
                        countchats={countchats} isCountChatsError={isCountChatsError} isCountChatsSuccess={isCountChatsSuccess} isCountChatsLoading={isCountChatsLoading} isCountChatsMessage={isCountChatsMessage} 
                        counthourlychats={counthourlychats} isCountHourlyChatsError={isCountHourlyChatsError} isCountHourlyChatsSuccess={isCountHourlyChatsSuccess} isCountHourlyChatsLoading={isCountHourlyChatsLoading} isCountHourlyChatsMessage={isCountHourlyChatsMessage}
                        averagevoicemessageperchat={averagevoicemessageperchat} isAverageVoiceMessagesPerChatError={isAverageVoiceMessagesPerChatError} isAverageVoiceMessagesPerChatSuccess={isAverageVoiceMessagesPerChatSuccess} isAverageVoiceMessagesPerChatLoading={isAverageVoiceMessagesPerChatLoading} isAverageVoiceMessagesPerChatMessage={isAverageVoiceMessagesPerChatMessage}
                    />
                    <EscalatedIssuesView
                        issue={issue} isIssueError={isIssueError} isIssueSuccess={isIssueSuccess} isIssueLoading={isIssueLoading} isIssueMessage={isIssueMessage}
                    />
                </div>
                <LastTwentyFourHours
                    communicationchannels={communicationchannels} isCommunicationChannelsError={isCommunicationChannelsError} isCommunicationChannelsSuccess={isCommunicationChannelsSuccess} isCommunicationChannelsLoading={isCommunicationChannelsLoading} isCommunicationChannelsMessage={isCommunicationChannelsMessage}
                />
                <EngagementFrequency
                    engagementfrequency={engagementfrequency} isEngagementFrequencyError={isEngagementFrequencyError} isEngagementFrequencySuccess={isEngagementFrequencySuccess} isEngagementFrequencyLoading={isEngagementFrequencyLoading} isEngagementFrequencyMessage={isEngagementFrequencyMessage}
                />
                {/* <LeastTopics /> */}
                {/* <PopularTopics /> */}
                {/* <KnowYourClients /> */}
                <GeneralizedMetrics />
            </div>
        </DashLayout>
    )
}