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

export default function DescriptiveAnalytics(){
    return (
        <DashLayout>
            <div>
                <div className="flex gap-8">
                    <ChatAnalytics />
                    <EscalatedIssuesView />
                </div>
                <LastTwentyFourHours />
                <EngagementFrequency />
                <LeastTopics />
                <PopularTopics />
                <KnowYourClients />
                <GeneralizedMetrics />
            </div>
        </DashLayout>
    )
}