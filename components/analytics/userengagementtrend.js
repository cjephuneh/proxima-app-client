/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React from "react";
import Chart from "chart.js/auto";
import axios from "../../components/axios";
import { selectEngagementFreqency } from "../../redux/analytics/analyticsslice";

const monthlydata = [];

const getEngagementFrequency = async () => {
  //The userengagemenmt trend data
  //const engagementfreqency = useSelector(selectEngagementFreqency)

  const { data } = axios
    .get(`/engagementfrequency`)
    .then((response) => {
      console.log(response.data);
      //dispatch(
      //setEngagementFreqency({
      //     engagementfreqency: response.data,
      //  })
      // );
      monthlydata.append(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        //dispatch(setAppointmentInfo(null));

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
      }
    });
};

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "User Queries",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      //data: [65, 59, 80, 81, 56, 55, 57, 65, 59, 80, 81, 56],
      data: monthlydata,
    },
  ],
};

export default () => (
  <div>
    <h2 className="text-blue-900 text-2xl text-center">Engagement Frequency</h2>
    <Line data={data} width={300} height={100} />
  </div>
);
