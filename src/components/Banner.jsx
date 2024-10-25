import bnr from "../assets/Banner.png";

const Banner = ({ img }) => {
  return (
    <div className="relative w-[1240px] h-[359px] mx-auto">
      <h2 className={`absolute left-[50%] translate-x-[-50%] top-[50%] text-white text-3xl`}>
        ''Time Spend with cats is never wasted''
      </h2>
      <img src={bnr} className="w-full h-full" alt="" />
    </div>
  );
};

export default Banner;