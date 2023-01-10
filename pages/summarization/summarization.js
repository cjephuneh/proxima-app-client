import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import { useRouter } from "next/router";
import Navbar from "../../components/ui/Header";
import SummarizationContext from "../../components/Summarization/SummarizationContext";
import ContextHeader from "../../components/Home/ContextHeader";
import TrackDatesContext from "../../components/Summarization/TrackDatesContext";


function summarization() {
  const router = useRouter();

  const user = useSelector(selectUser);
  const token = user.user.token;

  if (typeof window !== "undefined" && user == null)
    router.push("/authentication/signin");

  return (
    <div>
      <Head>
        <title>Proxima | Summariztion</title>
      </Head>
      <section className="mx-auto pt-8 max-w-7xl">
          <Navbar />
      </section>
      <div className="mx-auto pt-8">
          <section className="p-2 pt-6">
          <ContextHeader />
        </section>
        <div className="pt-12 flex flex-row space-x-2">
        <TrackDatesContext />
        <div className="grid grid-cols-3 space-x-2">
        <SummarizationContext />
          <SummarizationContext />
           <SummarizationContext />
          <SummarizationContext />
          <SummarizationContext />
          <SummarizationContext />
          <SummarizationContext />
           <SummarizationContext />
          <SummarizationContext />
          <SummarizationContext />
        </div>


        </div>
      </div>
    </div>
  );
}

export default summarization;
