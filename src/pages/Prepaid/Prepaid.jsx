import React, { useEffect } from "react";
import "./Prepaid.css";

import PrepaidComposition from "../../components/organism/PrepaidComposition/PrepaidComposition";

import PrepaidImageUp from "../../../src/assets/img/prepaidUp.png";
import PrepaidImageLeft from "../../../src/assets/img/prepaidLeft.png";
//animations
import Aos from "aos";
import "aos/dist/aos.css";

function Prepaid() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="simOnlyPageSection color2">
      <div className="simOnlyImageUpContainer">
        <img src={PrepaidImageUp} />
      </div>
      <div className="wrapper" data-aos="fade-right">
        <div className="simOnlyImageRightContainer">
          <img src={PrepaidImageLeft} />
        </div>
        <PrepaidComposition />
      </div>
    </div>
  );
}

export default Prepaid;
