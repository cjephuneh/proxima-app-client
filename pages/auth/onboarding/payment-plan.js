import Layout from "@/components/auth/Layout";
import PaymentPlanCard from "@/components/auth/onboarding/PaymentPlanCard";

export default function PaymentPlan() {
    return (
        <Layout>
            <div className="flex flex-col items-center mt-20">
                <h2 className="font-semibold text-3xl">Select a plan</h2>
                <p className="mt-3 text-gray-500 text-center">To proceed, you will have to select a plan</p>
                <div className="mt-20 flex gap-6">
                    <PaymentPlanCard type={'Basic'} price={'19'} />
                    <PaymentPlanCard type={'Professional'} price={'49'} />
                    <PaymentPlanCard type={'Business'} price={'99'} />
                </div>
            </div>
        </Layout>
    )
}