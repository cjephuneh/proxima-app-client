import DashLayout from "@/components/dashboard/DashLayout";
import ChatAnalytics from "@/components/dashboard/descriptive/ChatAnalytics";
import EscalatedIssuesView from "@/components/dashboard/descriptive/EscalatedIssuesView";
import PredictedChatAnalytics from "@/components/dashboard/predictive/PredictedChats";
import PredictedCommunityTrends from "@/components/dashboard/predictive/PredictedCommunityTrends";
import PredictedEscalatedIssues from "@/components/dashboard/predictive/PredictedEscalatedIssues";
import PredictedGenderDistribution from "@/components/dashboard/predictive/PredictedGenderDistribution";
import PredictedTopics from "@/components/dashboard/predictive/PredictedTopics";
import PredictedUniqueClients from "@/components/dashboard/predictive/PredictedUniqueClients";
import { useDispatch, useSelector } from "react-redux";

export default function Analytics(){
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
    return (
        <DashLayout>
            <div className="space-y-8">
                <div className="flex gap-8">
                    <PredictedChatAnalytics />
                    <PredictedEscalatedIssues />
                </div>
                <PredictedTopics />
                <div className="flex gap-8">
                    <PredictedGenderDistribution />
                    <PredictedUniqueClients />
                </div>
                <PredictedCommunityTrends />
            </div>
        </DashLayout>
    )
}