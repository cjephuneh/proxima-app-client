import React from "react";
import Channelengagementgraph from "../../components/analytics/channelengagementgraph";
import Userengagementtrend from "../../components/analytics/userengagementtrend";
function statisticalanalytics() {
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

export default statisticalanalytics;
