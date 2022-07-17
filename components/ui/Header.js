import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon } from "@heroicons/react/solid";
import { LoginIcon, SignUpIcon, LogoutIcon } from "@heroicons/react/solid";
import { UserCircleIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import { selectUser } from "../../redux/authentication/authslice";

function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();

  //const user = useSelector(selectUser);
  //const token = user.user.token;

  //console.log(user);
  const user = true;

  const logOutHandler = (e) => {
    if (typeof window !== "undefined") {
      user = false;

      if (dispatch && dispatch !== null && dispatch !== undefined) {
        user = false;
        localStorage.removeItem("user");
        router.push("/authentication/signin");
      }
    }
  };
  //if (typeof window !== "undefined" && !isLoggedIn)
  //  router.push("/authentication/signin");

  const authLinks = (
    <>
      <Link href="/">
        <a className="">
          <HomeIcon className="md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-2 hover:shadow-md" />
        </a>
      </Link>
      <Link href="/analytics/chatbasedanalytics">
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black  items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200">
          Chat Analytics
        </a>
      </Link>

      <a
        href="#!"
        onClick={(user = false)}
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full text-black  items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md"
      >
        <LogoutIcon className="hidden md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-2 hover:shadow-xl" />
      </a>
    </>
  );
  const guestLinks = (
    <>
      <Link href="/authentication/signin">
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full text-black  items-center justify-center">
          <LoginIcon className=" md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-1 hover:shadow-xl" />
        </a>
      </Link>

      <a
        href="#!"
        onClick={(user = false)}
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full text-black  items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md"
      >
        <LogoutIcon className="hidden md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-2 hover:shadow-xl" />
      </a>
    </>
  );

  return (
    <header className="flex flex-col md:w-full xl:flex xl:flex-row sticky xl:w-3/4 top-5 z-50 space-x-20  justify-start  p-5 md:px-10 md:mx-auto rounded-md shadow-lg border-1 border-blue:100 bg-gray-100">
      <div
        //onClick={() => router.push("/")}
        className="relative flex items-center  cursor-pointer my-auto"
      >
        <h1 className="sm:text-centre sm:text-lg md:text-xl font-tesla">
          KOSSE
        </h1>
      </div>

      <div className="items-center space-x-4 justify-center text-gray-500 cursor-pointer my-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto">
          {user ? authLinks : guestLinks}
        </div>
      </div>

      <div className=" flex my-auto  cursor-pointer right-2">
        <div>
          <div className="flex">
            <div className=" p-2 rounded-full ">
              <PhoneIcon className="h-7 cursor-pointer  hover:scale-110 transform transition duration-300 ease-out" />
            </div>
            <h1 className="p-3 text-blue-500 hover:text-blue-900">
              (+254) 793681840
            </h1>
          </div>{" "}
          <div className="flex">
            <div className=" p-2 rounded-full ">
              <MailIcon className="h-7 cursor-pointer hover:scale-110 transform transition duration-300 ease-out" />
            </div>
            <h1 className="p-3 text-blue-500 hover:text-blue-900">
              kosseai.inc@gmail.com
            </h1>
          </div>
        </div>

        <div className=" p-1 my-auto rounded-full cursor-pointer hover:animate-pulse hover:animate-bounce text-blue-900">
          <UserCircleIcon className="h-8" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
