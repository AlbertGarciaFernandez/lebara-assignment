import React from "react";
import "./Service.css";

import SearchFaq from "../../components/organism/SearchFaq/SearchFaq";

function Service() {
  return (
    <div className="serviceSection">
      <div className="serviceText">
        <h1>Customer Service</h1>
        <p>Today you can reach us between 09:00 and 18:00</p>
      </div>
      <SearchFaq />
    </div>
  );
}

export default Service;
