/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

import axios from "axios";
function SearchModal() {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/onboarding/waitlist",
      data: formField,
    })
      .then((response) => {
        //console.log(response.data.token);
        if (response.data.token) {
          console.log(response.data);
        }

        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
        } else if (error.request) {
        }
      });
  };

  return (
    <div className="flex items-center border-2 rounded-full py-1 shadow-md p-4 my-4">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        type="text"
        placeholder="Search..."
      />
      <SearchIcon className=" md:inline-flex h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md: mx-2" />
    </div>
  );
}

export default SearchModal;
