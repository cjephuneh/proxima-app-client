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
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import ChatbotCard from "../Summarization/ChatbotCard";

function ChatList() {
  const user = useSelector(selectUser);
  const schema = user.user.schema;
  const token = user.user.token;

  const [chatbotchat, setchatbotchat] = useState([]);
  const [chatslotintents, setchatslotintents] = useState([]);
  const [listchatslotintents, setlistchatslotintents] = useState([]);

  const dispatch = useDispatch();

  const authAxios = axios.create({
    baseURL: `https://${schema}proximadminserver.buzz/api/`,
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

  <>
    <div className='flex flex-row shadow-md p-2 bg-gray-50 border-b border-gray-400 hover:scale-102 transform transition duration-300 ease-out h-[70px]'>
    <ArrowDownIcon className="md:inline-flex h-8 bg-white rounded-full text-black hover:scale-110 transform transition duration-300 ease-out p-2 cursor-pointer md: mx-2 hover:shadow-md" />
    <button
      className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      >
      0793681840
    </button>
            <button
      className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
    >
      Sales
    </button>
    <div className="">
        <div className="p-2 bg-gray-200 rounded-md shadow-md text-sm">
        <p>01/12/2022</p>
        </div>
        {/*  */}            
    </div>
    
    </div>
  </>
  return (
    <div className='flex flex-row shadow-md p-2 bg-gray-50 h-[300px]'>
        <div>
        <div className='flex flex-row space-x-3'>
        <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
          0793681840
        </button>
                <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          Sales
        </button>
        <div className="">
        <div className="p-1 bg-gray-200 rounded-md shadow-md text-sm">
        <p>01/12/2022</p>
        </div>
        {/*  */}            
        </div>
        </div>
        <div>
        <ChatbotCard />
        </div>

</div>
    </div>
   
  );
}

export default ChatList;
