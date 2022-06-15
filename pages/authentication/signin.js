/* eslint-disable react/jsx-no-undef */
import React from "react";
import Login from "../../components/authentication/SignIn";
import Navbar from "../../components/ui/Header";

function Signin() {
  return (
    <div className="bg-gray-50">
      <main>
        <div className="mx-auto pt-8 max-w-7xl">
          <Navbar />
        </div>
        <section className="m-24">
          <Login />
        </section>
        <section></section>
      </main>
    </div>
  );
}
export default Signin;
