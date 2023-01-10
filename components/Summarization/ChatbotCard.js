/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ChatbotCard() {

  const [user_query, setUser_Query] = useState("");
  const dispatch = useDispatch();


  //useEffect(() => {
  // handleSubmit();
  //}, []);

  return (
    <>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-[250px] w-[300px] rounded-md bg-gray-300">
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div className="chat-message">
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none  text-gray-800 bg-white">
                  messages
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>

          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    messages
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatbotCard;
