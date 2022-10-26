import React, { useEffect } from "react";

import "./SimOnly.css";
import SimOnlyImageUP from "../../../src/assets/img/simonlyUp.png";
import SimOnlyImageRight from "../../../src/assets/img/simonlyRight.png";
import SimOnlyComposition from "../../components/organism/SimOnlyComposition/SimOnlyComposition";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

function SimOnly() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="simOnlyPageSection color">
      <div className="simOnlyImageUpContainer">
        <img src={SimOnlyImageUP} />
      </div>
      <div className="wrapper" data-aos="fade-right">
        <SimOnlyComposition />
        <div className="simOnlyImageRightContainer">
          <img src={SimOnlyImageRight} />
        </div>
      </div>
    </div>
  );
}

export default SimOnly;
