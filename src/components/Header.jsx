import { Link } from "react-router-dom";
import logo from "../assets/Component 1.png";
import search from "../assets/icons/search.png";
import instagrm from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import fb from "../assets/icons/facebook.png";

const Header = () => {
  return (
    <div className="flex justify-between w-full bg-white p-5">
      <Link to="/">
        <img src={logo} className="w-[231px] h-[105px] ml-10" alt="logo" />
      </Link>
      <div className="flex items-center">
        <Link to="/support">
          <button className="text-white bg-[#F37033] rounded-[40px] w-[153px] h-[43px] mr-4">
            SUPPORT
          </button>
        </Link>
        <Link to="/volunteer">
          <button className="text-white bg-[#FFA835] rounded-[40px] w-[224px] h-[43px] mr-4">
            BECOME VOLUNTARY
          </button>
        </Link>
        <div className="flex items-center mr-10">
          <img src={search} className="w-[24px] h-[24px] mr-3" alt="search" />
          <img
            src={instagrm}
            className="w-[24px] h-[24px] mr-3"
            alt="instagram"
          />
          <img src={twitter} className="w-[24px] h-[24px] mr-3" alt="twitter" />
          <img src={fb} className="w-[24px] h-[24px] mr-3" alt="fb" />
        </div>
      </div>
    </div>
  );
};

export default Header;
