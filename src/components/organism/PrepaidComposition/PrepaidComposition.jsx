import React from "react";
import "./PrepaidComposition.css";

import TextSection from "../../molecules/textSection/textSection";

function PrepaidComposition() {
  return (
    <div className="prepaidTextSection">
      <div className="pruebita">
        <div className="prepaidTextWrapper">
          <TextSection
            title="Prepaid"
            subtitle="Decide for yourself when you pay"
            li1="Best network (KPN)"
            li2="Free number porting"
            li3="Free delivery by PostNL"
            buttonvariantpink="pink"
            buttonpinktext="Order your free SIM"
            buttonvariantgray="gray"
            buttograytext="Top up"
          />
        </div>
      </div>
    </div>
  );
}

export default PrepaidComposition;
