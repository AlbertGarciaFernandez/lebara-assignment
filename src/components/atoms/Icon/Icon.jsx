import { ReactComponent as TickWhite } from "./tickWhite.svg";
import { ReactComponent as PersonBlue } from "./personBlue.svg";
import { ReactComponent as PlusBlue } from "./plusBlue.svg";
import { ReactComponent as PlusBlack } from "./plusBlack.svg";
import { ReactComponent as TickGray } from "./tickGray.svg";
import { ReactComponent as Twitter } from "./Twitter.svg";
import { ReactComponent as Star } from "./Star.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Facebook } from "./Facebook.svg";
import { ReactComponent as Lebara } from "./Lebara.svg";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Rank } from "./trustpilotRank.svg";
// import { ReactComponent as Down } from "./down.png";

const Icon = ({ type }) => {
  return (
    <>
      {type === "tickWhite" && <TickWhite />}
      {type === "hamburger" && <Hamburger />}
      {type === "lebara" && <Lebara />}
      {type === "personBlue" && <PersonBlue />}
      {type === "plusBlue" && <PlusBlue />}
      {type === "plusBlack" && <PlusBlack />}
      {type === "tickGray" && <TickGray />}
      {type === "twitter" && <Twitter />}
      {type === "star" && <Star />}
      {/* {type === "down" && <Down />} */}
      {type === "hamburger" && <Hamburger />}
      {type === "close" && <Close />}
      {type === "rank" && <Rank />}
      {type === "facebook" && <Facebook />}
    </>
  );
};

export default Icon;
