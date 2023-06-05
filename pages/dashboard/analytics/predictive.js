import DashLayout from "@/components/dashboard/DashLayout";
import EscalatedIssuesView from "@/components/dashboard/descriptive/EscalatedIssuesView";
import Interactions from "@/components/dashboard/predictive/Interactions";

export default function Analytics(){
    return (
        <DashLayout>
            <div>
                <div className="flex gap-8">
                    <Interactions />
                    <EscalatedIssuesView />
                </div>
            </div>
        </DashLayout>
    )
}