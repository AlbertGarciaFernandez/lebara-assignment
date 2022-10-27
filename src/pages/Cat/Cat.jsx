import React, { useState } from "react";

import { Button } from "@chakra-ui/react";

import "./Cat.css";

function Cat() {
  const [imgUrl, setUrl] = useState();
  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setUrl(data[0].url));
  };
  console.log(imgUrl);
  return (
    <div className="catWrapper">
      <div className="buttonWrapper">
        <button onClick={() => callImg()} className="buttonCat">
          Random cat
        </button>
      </div>
      <div className="catImgWrapper">
        <img src={imgUrl} />
      </div>
    </div>
  );
}

export default Cat;
