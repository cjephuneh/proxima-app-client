/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../../redux/authentication/authslice";
import { selectCountAllChats, SelectCountEscalatedissues, setCountAllChats, SetCountEscalatedissues } from "../../redux/analytics/analyticsslice";

function CumulativeTrends() {
  const user = useSelector(selectUser);
  // console.log("##########")
  // console.log(user.user.tenant_domain_schema);
  // console.log("##########")
  // const schema = 'atiamcollege'
  const token = user.user.token;
  const schema = user.user.tenant_domain_schema
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ…jQwfQ.XH1J7LdsZciGyrXj8qlL4hpBknaCPBmJvRvJunz-cOM'

  const [countescalatedissues, setcountescalatedissues] = useState([]);
  const [averageinteractiontime, setaverageinteractiontime] = useState([]);
  // Pull the data from the respective slices
  const totalescalatedissues = useSelector(SelectCountEscalatedissues)
  const totalchatcount = useSelector(selectCountAllChats)
  // console.log(totalescalatedissues)
  // console.log(totalchatcount)

  const authAxios = axios.create({
    baseURL: `https://${schema}.proximadminserver.buzz/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });



  const dispatch = useDispatch();

  const getEscalatedissues = async () => {
    //const dispatch = useDispatch();

    const { data } = authAxios
      .get(`countescalatedissues?schema=atiamcollege`)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          SetCountEscalatedissues({
            totalescalatedissues: response.data,
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
  // const getAverageinteractionTime = async () => {
  //   //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`averageinteractiontime?schema=atiamcollege`)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       setaverageinteractiontime(response.data);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         // Request made and server responded
  //         //dispatch(setAppointmentInfo(null));

  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log(error.message);
  //       }
  //     });
  // };

  const countAllChats = async () => {
    //const dispatch = useDispatch();

    
    const { data } = authAxios
      .get(`countallchats?schema=atiamcollege`)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          setCountAllChats({
            totalchatcount: response.data,
          })
        );
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          // dispatch(setAppointmentInfo(null));

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
    // getAverageinteractionTime();
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
          {totalchatcount?.totalchatcount}
        </h1>
        <p className="text-3xl text-blue-900 m-2">Total Interactions</p>
      </div>
      <div className="flex-col pt-2  text-center">
        <h1 className="text-4xl text-black text-center m-2">
          {totalescalatedissues?.totalescalatedissues}
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
