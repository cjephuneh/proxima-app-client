/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Channelengagementgraph from "../components/analytics/channelengagementgraph";
import CumulativeTrends from "../components/analytics/CumulativeTrends";
import Hourlystatus from "../components/analytics/hourlystatus";
import Userengagementtrend from "../components/analytics/userengagementtrend";
import Navbar from "../components/ui/Header";
import { selectUser } from "../redux/authentication/authslice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  try {
    const user = useSelector(selectUser);
    const token = user.user.token;
    console.log(user.user);
  } catch (err) {
    const user = null;
    router.push("/authentication/signin");
  }

  if (typeof window !== "undefined" && user == null)
    router.push("/authentication/signin");
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
