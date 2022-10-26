import React from "react";
import "./textSection.css";

import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

function textSection(props) {
  return (
    <div className="textSection">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <ul>
        <li>
          <Icon type="tickGray" />
          {props.li1}
        </li>

        <li>
          <Icon type="tickGray" />
          {props.li2}
        </li>

        <li>
          <Icon type="tickGray" />
          {props.li3}
        </li>
      </ul>
      <div>
        <div className="buttonPinkWrapper">
          <Button
            variant={props.buttonvariantpink}
            text={props.buttonpinktext}
          />
        </div>
        <div className="buttonGrayWrapper">
          <Button
            variant={props.buttonvariantgray}
            text={props.buttograytext}
          />
        </div>
      </div>
    </div>
  );
}

export default textSection;
