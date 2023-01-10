import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import { useRouter } from "next/router";
import Navbar from "../../components/ui/Header";
import ContextHeader from "../../components/Home/ContextHeader";
import TrackDatesContext from "../../components/Summarization/TrackDatesContext";
import CustomerFeedbackContext from "../../components/Home/customerfeedback/CustomerFeedbackContext";
import FeedbackContextHeader from "../../components/Home/customerfeedback/FeedbackContextHeader";


function customerfeedback() {
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
          <FeedbackContextHeader />
        </section>
        <div className="pt-12 flex flex-row space-x-2">
        <TrackDatesContext />
        <div className="grid grid-cols-3 space-x-2">
        <CustomerFeedbackContext />
          <CustomerFeedbackContext />
           <CustomerFeedbackContext />
          <CustomerFeedbackContext />
          <CustomerFeedbackContext />
          <CustomerFeedbackContext />
          <CustomerFeedbackContext />
           <CustomerFeedbackContext />
          <CustomerFeedbackContext />
          <CustomerFeedbackContext />
        </div>


        </div>
      </div>
    </div>
  );
}

export default customerfeedback;
