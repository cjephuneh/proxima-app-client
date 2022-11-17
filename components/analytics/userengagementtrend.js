import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/authentication/authslice";
import axios from "axios";
import { selectFrequency, setFrequency } from '../../redux/analytics/analyticsslice';

function Userengagementtrend() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const frequency = useSelector(selectFrequency)
  console.log(frequency.frequency)

  const token = user.user.token;
  const schema = user.user.tenant_domain_schema

  const authAxios = axios.create({
    baseURL: `https://${schema}.proximadminserver.buzz/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const engagementdatafreq = []

const GetEngagementFrequency = async () => {

  const { data } = authAxios
    .get(`engagementfrequency?schema=${schema}`)
    .then((response) => {
      // console.log(response.data);
      dispatch(
        setFrequency({
          frequency: response.data,
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


// 


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
        data: [65, 59, 80, 81, 56, 55, 57, 65, 59, 80, 81, 56],
        // data: monthlydata,
      },
    ],
  };


  useEffect(() => {
    GetEngagementFrequency();
  }, []);

  return (
    <div>
    <h2 className="text-blue-900 text-2xl text-center">Engagement Frequency</h2>
    <Line data={data} width={300} height={100} />
  </div>  )
}


export default Userengagementtrend;
