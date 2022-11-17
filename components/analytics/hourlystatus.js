/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../../redux/authentication/authslice";
import { SelectHourlychats, SelectHourlyCountEscalatedIssues, SelectHourlyQueriesReceived, SetHourlychats, SetHourlyCountEscalatedIssues, SetHourlyQueriesReceived } from "../../redux/analytics/analyticsslice";

function Hourlystatus() {
  const user = useSelector(selectUser);
  const token = user.user.token;
  const schema = user.user.tenant_domain_schema

  const authAxios = axios.create({
    baseURL: `https://${schema}.proximadminserver.buzz/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const dispatch = useDispatch();

  // Pull the data from selector
  const hourlychats = useSelector(SelectHourlychats)
  const hourlyqueriesreceived = useSelector(SelectHourlyQueriesReceived)
  const hourlyescalatedissues = useSelector(SelectHourlyCountEscalatedIssues)
  // console.log(hourlyescalatedissues)

  const getHourlyChats = async () => {
    const { data } = authAxios
      .get(`hourlychats?schema=${schema}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          SetHourlychats({
           hourlychats: response.data,
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

  const getHourlyEscalatedIssues = async () => {

    const { data } = authAxios
      .get(`hourlycountescalatedissues?schema=${schema}`)
      .then((response) => {
        // console.log(response.data, "###########");
        // console.log(response.data);
        dispatch(
          SetHourlyCountEscalatedIssues({
            hourlyescalatedissues: response.data,
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
  const getHourlyQueriesReceived = async () => {
    //const dispatch = useDispatch();

    const { data } = authAxios
      .get(`hourlyqueriesreceived?schema=${schema}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(
          SetHourlyQueriesReceived({
           hourlyqueriesreceived: response.data,
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


  useEffect(() => {
    getHourlyChats();
    getHourlyQueriesReceived();
    getHourlyEscalatedIssues();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-blue-900 m-2">
        Engagemnet Hourly Status
      </h1>
      <h4 className="text-center text-xl text-blue-900 m-2">
        {/* Time: {hourlyengagement?.created_at} Analysis */}
      </h4>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            {hourlychats?.hourlychats}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Current Interactions</p>
        </div>
        <div className="flex-col pt-2 text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {hourlyescalatedissues?.hourlyescalatedissues}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Isssues Escalated</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            {hourlyqueriesreceived?.hourlyqueriesreceived}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Queries Received</p>
        </div>

        <div className="flex-col pt-2   text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {/* {hourlyclientsatisfaction?.client_satisfaction}% */}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Client Satisfaction</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {/* {hourlyaverageresponsetime?.average_response_time} min */}
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
