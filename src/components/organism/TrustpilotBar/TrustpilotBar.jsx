import React from "react";
import "./TrustpilotBar.css";
import Icon from "../../atoms/Icon/Icon";

function TrustpilotBar() {
  return (
    <div className="trustpilotContainer">
      <div className="onlyDesktop">Excellent</div>
      <Icon type="rank" />
      <div className="onlyDesktop">11.594 reviews on</div>
      <Icon type="star" />
      Trustpilot
    </div>
  );
}

export default TrustpilotBar;
