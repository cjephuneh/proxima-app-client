import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Bar } from "react-chartjs-2";
import { setMostPopularTopics, selectMostPopularTopics } from "../../redux/analytics/analyticsslice";
import { selectUser } from "../../redux/authentication/authslice";

function MostPopularTopics() {


  const user = useSelector(selectUser);
  const schema = user.user.tenant_domain_schema;
  const token = user.user.token;

  const authAxios = axios.create({
  baseURL: `https://${schema}.proximadminserver.buzz/api/`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  const dispatch = useDispatch();

  const mostpopulartopics = useSelector(selectMostPopularTopics)
  console.log(mostpopulartopics.mostpopulartopics)

  const GetMostPopularTopics = async () => {

    const { data } = authAxios
      .get(`mostpopulartopics?schema=${schema}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          setMostPopularTopics({
            mostpopulartopics: response.data,
        })
        );
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
  
  const data = {
    labels: ["WhatsApp", "Instagram", "Twitter", "Website", "Text"],
    datasets: [
      {
        label: "Channels Engagement Pattern",
        data: [12, 19, 3, 5, 2],
        // data: engagementdata,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    GetMostPopularTopics();
  }, []);

  return (
    <div className="pt-4 h-[400px] w-[1000px] p-4 ">
      <h2 className="text-3xl text-center m-2 text-blue-900">
      Conversation Points
      </h2>
      <Bar
        data={data}
        width={400}
        height={100}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}


export default MostPopularTopics;
