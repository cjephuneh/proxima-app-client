import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Navbar from '../../components/ui/Header';
import CumulativeTrends from '../../components/analytics/CumulativeTrends';
import Hourlystatus from '../../components/analytics/hourlystatus';
import Userengagementtrend from '../../components/analytics/userengagementtrend';
import CumulativeHourlyTrend from '../../components/analytics/CumulativeHourlyTrend';
import Channelengagementgraph from "../../components/analytics/channelengagementgraph";
import MostPopularTopics from '../../components/analytics/MostPopularTopics';
import Newstatus from '../../components/analytics/hourlystatus copy';

const descriptiveanalytics = () => {
    const router = useRouter();
    // try {
    //   const user = useSelector(selectUser);
    //   console.log(user);
    //   const token = user.user.token;
    //   console.log(user.user);
    // } catch (err) {
    //   const user = null;
    //   router.push("/authentication/signin");
    // }
    // if (typeof window !== "undefined" && user == null)
    //   router.push("/authentication/signin");
    return (
      <div className="">
        <Head>
          <title>Proxima | Descriptive</title>
        </Head>
        <section className="mx-auto pt-8 max-w-7xl ">
          <Navbar />
        </section>
        <section className='flex flex-row pt-6 p-4 space-x-2'>
          <CumulativeTrends/>
          <div className='space-y-6'>
          <Hourlystatus/>
          <Newstatus/>
          </div>

        </section>
        <section className='flex flex-row p-6 space-x-2  pt-6 divide-x divide-black'>
        <MostPopularTopics /> 
        <Channelengagementgraph />

        </section>
        <section className='p-6 pt-8 shadow-md'>
        <CumulativeHourlyTrend />
        </section>

        <section className='p-6 pt-8 shadow-md'>
        <Userengagementtrend />
        </section>

      </div>
    );
  }
  

export default descriptiveanalytics

