/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../../redux/authentication/authslice";

function Hourlystatus() {
  // const user = useSelector(selectUser);
  // const schema = user.user.schema;
  // const token = user.user.token;

  // const [hourlyengagement, sethourlyengagement] = useState([]);
  // const [hourlychats, sethourlychats] = useState([]);
  // const [hourlycountescalatedissues, sethourlycountescalatedissues] = useState(
  //   []
  // );
  // const [hourlyqueriesreceived, sethourlyqueriesreceived] = useState([]);
  // const [hourlyclientsatisfaction, sethourlyclientsatisfaction] = useState([]);
  // const [hourlyaverageresponsetime, sethourlyaverageresponsetime] = useState(
  //   []
  // );
  // const authAxios = axios.create({
  //   baseURL: `https://${schema}proximaawsserver.xyz:8000/api/`,
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const dispatch = useDispatch();

  // const getHourlyChats = async () => {
  //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`hourlychats `)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       sethourlychats(response.data);
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
  // const getHourlyAverageResponseTime = async () => {
  //   //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`hourlyaverageresponsetime `)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       sethourlyaverageresponsetime(response.data);
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

  // const getHourlyEscalatedIssues = async () => {
  //   //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`hourlycountescalatedissues `)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       sethourlycountescalatedissues(response.data);
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
  // const getHourlyQueriesReceived = async () => {
  //   //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`hourlyqueriesreceived `)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       sethourlyqueriesreceived(response.data);
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
  // const getHourlyClientSatisfaction = async () => {
  //   //const dispatch = useDispatch();

  //   const { data } = authAxios
  //     .get(`/hourlyclientsatisfaction `)
  //     .then((response) => {
  //       console.log(response.data);
  //       //dispatch(
  //       //  setCommunicationChannel({
  //       //    communicationchannel: response.data,
  //       // })
  //       //);
  //       sethourlyclientsatisfaction(response.data);
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

  // useEffect(() => {
  //   getHourlyChats();
  //   getHourlyAverageResponseTime();
  //   getHourlyEscalatedIssues();
  //   getHourlyQueriesReceived();
  //   getHourlyClientSatisfaction();
  // }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-blue-900 m-2">
        Engagemnet Hourly Status
      </h1>
      <h4 className="text-center text-xl text-blue-900 m-2">
        Time: {hourlyengagement?.created_at} Analysis
      </h4>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            {hourlychats?.current_interactions}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Current Interactions</p>
        </div>
        <div className="flex-col pt-2 text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {hourlycountescalatedissues?.issues_escalated}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Isssues Escalated</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            {hourlyqueriesreceived?.queries_received}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Queries Received</p>
        </div>

        <div className="flex-col pt-2   text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {hourlyclientsatisfaction?.client_satisfaction}%
          </h1>
          <p className="text-3xl text-blue-900 m-2">Client Satisfaction</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {hourlyaverageresponsetime?.average_response_time} min
          </h1>
          <p className="text-3xl text-blue-900 m-2">
            Average User response Time
          </p>
          {/*
          SQL QUERIES
          1. Number of requests being received
          2. Escalated Issues
          3. Unique queries received
          4. Satisfaction Question 
          5. User response Time
          
          
          
          */}
          {/* */}
        </div>
      </div>
    </div>
  );
}

export default Hourlystatus;
