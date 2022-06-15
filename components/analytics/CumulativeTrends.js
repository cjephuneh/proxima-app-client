/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";
import { useDispatch } from "react-redux";
import axios from "../../components/axios";

function CumulativeTrends() {
  const [countallchats, setcountallchats] = useState([]);
  const [countescalatedissues, setcountescalatedissues] = useState([]);
  const [averageinteractiontime, setaverageinteractiontime] = useState([]);

  const dispatch = useDispatch();

  const getEscalatedissues = async () => {
    //const dispatch = useDispatch();

    const { data } = axios
      .get(`/countescalatedissues `)
      .then((response) => {
        console.log(response.data);
        //dispatch(
        //  setCommunicationChannel({
        //    communicationchannel: response.data,
        // })
        //);
        setcountescalatedissues(response.data);
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
  const getAverageinteractionTime = async () => {
    //const dispatch = useDispatch();

    const { data } = axios
      .get(`/averageinteractiontime `)
      .then((response) => {
        console.log(response.data);
        //dispatch(
        //  setCommunicationChannel({
        //    communicationchannel: response.data,
        // })
        //);
        setaverageinteractiontime(response.data);
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

  const countAllChats = async () => {
    //const dispatch = useDispatch();

    const { data } = axios
      .get(`/countallchats `)
      .then((response) => {
        console.log(response.data);
        //dispatch(
        //  setCommunicationChannel({
        //    communicationchannel: response.data,
        // })
        //);
        setcountallchats(response.data);
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

  useEffect(() => {
    getAverageinteractionTime();
    getEscalatedissues();
    countAllChats();
  }, []);

  return (
    <div className="flex flex-col p-1">
      <div className="sm:object-cover object-center relative h-[200px] w-[300px] sm:h-[300px] sm:w-[400px]  object-cover lg:h-[400px] lg:w-[500px] xl:h-[500px] ">
        <Image
          src={coverpage}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
      <div className="flex-col pt-2 bg-gray-100  text-center">
        <h1 className="text-4xl text-black m-2">
          {countallchats?.total_interactions}
        </h1>
        <p className="text-3xl text-blue-900 m-2">Total Interactions</p>
      </div>
      <div className="flex-col pt-2  text-center">
        <h1 className="text-4xl text-black text-center m-2">
          {countescalatedissues?.total_issue_escalated}
        </h1>
        <p className="text-3xl text-blue-900 m-2">Total Issues escalated</p>
      </div>

      <div className="flex-col pt-2  text-center">
        <h1 className="text-4xl text-black text-center m-2">
          {averageinteractiontime?.average_interaction_time} min
        </h1>
        <p className="text-3xl text-blue-900 m-2">Average Interaction Time</p>
      </div>
    </div>
  );
}

export default CumulativeTrends;
