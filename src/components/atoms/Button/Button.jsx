import classnames from "classnames";
import "./Button.css";

const Button = ({ variant, text }) => {
  const buttonClasses = classnames("button", {
    pink: variant === "pink",
    light: variant === "light",
  });

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
