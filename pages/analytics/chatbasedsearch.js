import React from "react";
import Head from "next/head";
import ChatList from "../../components/chats/chatlist";
import Navbar from "../../components/ui/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import { useRouter } from "next/router";
import AnalyticsFilter from "../../components/SearchFunctions.js/AnalyticsFilter";

function ChatBasedanAlytics() {
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
        <div className="pt-12 flex flex-row  space-x-12">
          <AnalyticsFilter />
          <ChatList />
        </div>
      </div>
    </div>
  );
}

export default ChatBasedanAlytics;