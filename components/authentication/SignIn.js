import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import {
  setLoginFail,
  setLogin_Sucess,
} from "../../redux/authentication/authslice";
import Typical from "react-typical";

const Login = (props) => {
  const router = useRouter();
  //const { isLoggedIn } = useSelector((state) => state.auth);
  //const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const usersSignIn = async () => {
    let formField = new FormData();

    formField.append("email", email);
    formField.append("password", password);

    await axios({
      method: "post",
      url: "https://proximaawsserver.xyz/api/usersauth/userlogin/",
      data: formField,
    })
      .then((response) => {
        //console.log(response.data.token);
        if (response.data.token) {
          dispatch(
            setLogin_Sucess({
              user: response.data,
            })
          );
          router.push("/");
          console.log(response.data);

          dispatch(setLoginFail(null));
        }

        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          dispatch(
            setLoginFail({
              error: error.response.data,
            })
          );

          //console.log(error.response.data.errors.error);
          //console.log(error.response.status);
          //console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          //console.log(error.request);
          dispatch(
            setLoginFail({
              error: error.request,
            })
          );
          dispatch(setLogin_Sucess(null));
        } else {
          // Something happened in setting up the request that triggered an Error
          dispatch(setLoginFail({ error: error.message }));
          dispatch(setLogin_Sucess(null));
        }
      });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:m-12">
      <div className="hidden md:block bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl text-blue-900 p-2">Embrace</h2>
        <h2 className="text-3xl text-blue-900 p-2">Embrace Technology</h2>
        <h2 className="text-3xl text-blue-900 p-2">Embrace Technology in</h2>
        <h2 className="text-3xl text-blue-900 p-2">
          Embrace Technology in Efficient
        </h2>
        <h2 className="text-3xl text-blue-900 p-2">
          Embrace Technology in Efficient Customer Sales Agents
        </h2>
        <h2 className="text-3xl text-blue-900 p-2">
          Embrace Technology in Efficient Customer Servive Agents
        </h2>
        <h2 className="text-3xl text-blue-900 p-2 text-center">
          <Typical
            wrapper="b"
            //loop={Infinity}
            steps={[
              "State of The Art Customer Engagement...",
              1000,
              "KOSSE AI",
              1000,
            ]}
          />
        </h2>
      </div>
      <div className="">
        <div className="text-center">
          <button className="bg-blue-900 text-white p-2 rounded-xl m-12 mt-8 hover:animate-pulse">
            Sign in with Google
          </button>
        </div>

        <h4 className="text-center text-blue-900 text-2xl">-OR-</h4>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-blue-900 dark:text-gray-200">
                Sign in
              </h1>
              <p className="text-blue-400 animate-bounce">
                Sign in to access your account
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={usersSignIn}>
                <div className="mb-6">
                  <label
                    //for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      //for="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <a
                      href="#!"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none"
                    onClick={usersSignIn}
                  >
                    Login
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Dont have an account yet
                  <a
                    className="no-underline border-b border-blue text-blue"
                    href="/signin/"
                  >
                    <button className="bg-blue-900 text-white p-2 rounded-md m-6 mt-2 hover:animate-pulse">
                      Sign Up
                    </button>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
