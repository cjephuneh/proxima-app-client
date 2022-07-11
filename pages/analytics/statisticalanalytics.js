import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Channelengagementgraph from "../../components/analytics/channelengagementgraph";
import Userengagementtrend from "../../components/analytics/userengagementtrend";
import { selectUser } from "../../redux/authentication/authslice";
function Statisticalanalytics() {
  const router = useRouter();

  // const user = useSelector(selectUser);
  // const token = user.user.token;

  // if (typeof window !== "undefined" && user == null)
  //   router.push("/authentication/signin");

  return (
    <div>
      <div>
        <Userengagementtrend />
      </div>
      <div>
        <Channelengagementgraph />
      </div>
    </div>
  );
}

export default Statisticalanalytics;
