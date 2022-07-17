import React from "react";
import Head from "next/head";
import ChatList from "../../components/chats/chatlist";
import Navbar from "../../components/ui/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import { useRouter } from "next/router";

function ChatBasedanAlytics() {
  const router = useRouter();

  const user = useSelector(selectUser);
  const token = user.user.token;

  if (typeof window !== "undefined" && user == null)
    router.push("/authentication/signin");

  return (
    <div>
      <Head>
        <title>KOSSE</title>
      </Head>
      <div className="mx-auto pt-8 max-w-7xl">
        <Navbar />
        <div className="pt-12">
          <ChatList />
        </div>
      </div>
    </div>
  );
}

export default ChatBasedanAlytics;
