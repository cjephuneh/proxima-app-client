import React from "react";
import Head from "next/head";
import ChatList from "../../components/chats/chatlist";
import Navbar from "../../components/ui/Header";

function ChatBasedanAlytics() {
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
