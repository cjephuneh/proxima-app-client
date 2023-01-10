import React from "react";
import Head from "next/head";
import Navbar from "../../components/ui/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import { useRouter } from "next/router";
import MonthlyForecasting from "../../components/PredictiveAnalytics.js/MonthlyForecasting";
import { CumulativeHourlyPrediction } from "../../components/PredictiveAnalytics.js/CumulativeHourlyPrediction";
import { ChatMeansPrediction } from "../../components/PredictiveAnalytics.js/ChatMeansPrediction";
import { MultipleDoughnut } from "../../components/PredictiveAnalytics.js/MultipleDoughnut";
import { EscalatedConversationsPrediction } from "../../components/PredictiveAnalytics.js/EscalatedConversationsPrediction";
import { PieChart } from "../../components/PredictiveAnalytics.js/PieChart";
import { MultiAxis } from "../../components/PredictiveAnalytics.js/MultiAxis";
import { BarGrouped } from "../../components/PredictiveAnalytics.js/BarGrouped";
import { Events } from "../../components/PredictiveAnalytics.js/Events";
import AnalyticsDescription from "../../components/PredictiveAnalytics.js/AnalyticsDescription";

function predictiveanalytics() {
  const router = useRouter();

  const user = useSelector(selectUser);
  const token = user.user.token;

  if (typeof window !== "undefined" && user == null)
    router.push("/authentication/signin");

  return (
    <div>
      <Head>
        <title>Proxima | SearchModal</title>
      </Head>
      <div className="mx-auto pt-8 max-w-7xl">
        <Navbar />
        <div className="pt-12 divide-y divide-black">
          <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <MonthlyForecasting />
          </section>

          <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <CumulativeHourlyPrediction />
          </section>

          <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <ChatMeansPrediction />
          </section>

          <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <EscalatedConversationsPrediction />
          </section>

          {/* <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <BarGrouped />
          </section> */}

          <section className="py-6 border-x border-black">
          <AnalyticsDescription />
          <PieChart />
          </section>
        </div>
      </div>
    </div>
  );
}

export default predictiveanalytics;
