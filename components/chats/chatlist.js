/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setChatbotChat,
  setChatbotChatlist,
  setChatSlotIntent,
} from "../../redux/analytics/analyticsslice";
import { selectUser } from "../../redux/authentication/authslice";

function ChatList() {
  const user = useSelector(selectUser);
  const schema = user.user.schema;
  const token = user.user.token;

  const [chatbotchat, setchatbotchat] = useState([]);
  const [chatslotintents, setchatslotintents] = useState([]);
  const [listchatslotintents, setlistchatslotintents] = useState([]);

  const dispatch = useDispatch();

  const authAxios = axios.create({
    baseURL: `https://${schema}proximaserver.eastus.cloudapp.azure.com/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const getChatbotChat = async () => {
    const { data } = authAxios
      .get(`retrievechatbotchats/${id}/`)
      .then((response) => {
        console.log(response.data);
        dispatch(
          setChatbotChat({
            chatbotchat: response.data,
          })
        );
        setchatbotchat(response.data);
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

  const getChatSlotIntentFilling = async () => {
    const { data1 } = axios
      .get(`retrieveupdateslotintents/${id}/`)
      .then((response) => {
        console.log(response.data);
        dispatch(
          setChatSlotIntent({
            chatslotintent: response.data,
          })
        );
        setchatslotintents(response.data);
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

  const getChatbotChatList = async () => {
    const { data } = axios
      .get(`listchats/`)
      .then((response) => {
        console.log(response.data);
        dispatch(
          setChatbotChatlist({
            chatbotchatlist: response.data,
          })
        );
        setlistchatslotintents(response.data);
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
    //getChatbotChat();
    //getChatSlotIntentFilling;
    //getChatbotChatList;
  }, []);
  return (
    <>
      <div className="flex flex-row justify-center space-x-96">
        <h1 className="text-blue-900 text-2xl text-center">CHATS</h1>
        <h1 className="text-blue-900 text-2xl text-center">
          Slots and Intents
        </h1>
      </div>
      <div className="flex flex-row justify-between space-x-2">
        {listchatslotintents?.map(
          ({
            id,
            client,
            chat_means,
            user_query,
            chatbot_response,
            paraphrased_response,
            escalated,
            created_at,
          }) => (
            <div className="flex flex-row justify-center space-x-24 bg-gray-100 p-1">
              <h1>{client}</h1>
              <p>Time: {created_at}</p>
            </div>
          )
        )}

        {chatbotchat?.map(
          ({
            id,
            client,
            chat_means,
            user_query,
            chatbot_response,
            paraphrased_response,
            escalated,
          }) => (
            <div className="bg-gray-100 p-1  rounded-md w-[1000px] border-2">
              <p className="">{user_query}</p>
              <p className="">{chatbot_response}</p>
              <div className="flex flex-row justify-between">
                <p>{chat_means}</p>
                <p>{escalated}</p>
              </div>
            </div>
          )
        )}
        {chatslotintents?.map(({ id, client, slots, intents }) => (
          <div className="bg-gray-100 p-1 rounded-md w-[500px] border-2">
            <p className="p-1">{slots}: </p>
            <p className="p-1">{intents}: </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChatList;
