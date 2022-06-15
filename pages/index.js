/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import Image from "next/image";
import Channelengagementgraph from "../components/analytics/channelengagementgraph";
import CumulativeTrends from "../components/analytics/CumulativeTrends";
import Hourlystatus from "../components/analytics/hourlystatus";
import Userengagementtrend from "../components/analytics/userengagementtrend";
import Navbar from "../components/ui/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KOSSE</title>
      </Head>
      <div className="mx-auto pt-8 max-w-7xl">
        <Navbar />
      </div>
      <div className="mx-auto pt-8 ">
        <div className="flex flex-row ">
          <div>
            <CumulativeTrends />
          </div>

          <div className="p-4">
            <div className="flex flex-row">
              <Hourlystatus />
            </div>
            <div className="flex flex-col p-4">
              <div className="p-4">
                <Userengagementtrend />
                <Channelengagementgraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
