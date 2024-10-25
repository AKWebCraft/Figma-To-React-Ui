const Banner = ({ img, top, bottom }) => {
  return (
    <div className="relative w-[1240px] h-[359px] mx-auto">
      <h2
        style={{ top: top, bottom: bottom }}
        className={`absolute left-[50%] translate-x-[-50%] text-white text-3xl`}
      >
        ''Time Spend with cats is never wasted''
      </h2>
      <img src={img} className="w-full h-full" alt="" />
    </div>
  );
};

export default Banner;
