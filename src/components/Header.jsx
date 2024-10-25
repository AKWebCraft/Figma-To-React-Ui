import { Link } from "react-router-dom";
import logo from "../assets/Component 1.png";
import search from "../assets/icons/search.png";
import instagrm from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import fb from "../assets/icons/facebook.png";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between w-full bg-white p-5">
      <Link to="/">
        <img src={logo} className="w-[231px] h-[105px] ml-5" alt="logo" />
      </Link>
      <div className="flex items-center">
        <Link to="/support">
          <Button
            text="SUPPORT"
            bg="#F37033"
            radius="40px"
            width="153px"
            height="43px"
            margin="5px"
          />
        </Link>
        <Link to="/volunteer">
          <Button
            text="BECOME VOLUNTARY"
            bg="#FFA835"
            radius="40px"
            width="224px"
            height="43px"
            margin="5px"
          />
        </Link>
        <div className="flex items-center mr-10">
          <img src={search} className="w-[24] h-[24] mr-3" alt="search" />
          <img src={instagrm} className="w-[24] h-[24] mr-3" alt="instagram" />
          <img src={twitter} className="w-[24] h-[24] mr-3" alt="twitter" />
          <img src={fb} className="w-[24] h-[24] mr-3" alt="fb" />
        </div>
      </div>
    </div>
  );
};

export default Header;
