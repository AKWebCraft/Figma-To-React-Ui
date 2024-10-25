import Banner from "../components/Banner";
import Button from "../components/Button";
import Card from "../components/Card";
import img1 from "../assets/Rectangle 3.png";
import img2 from "../assets/Rectangle 4.png";
import img3 from "../assets/Rectangle 5.png";
import img4 from "../assets/Rectangle 6.png";
import BannerImg from "../assets/Banner.png";
import Frame2 from "../assets/Frame 2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ml-9 mr-9">
      <Banner img={BannerImg} top="50%" />
      <div className="flex flex-wrap justify-around mt-10">
        <Card
          img={img1}
          title="OLIVER"
          description="  Pääsu is a good cat mother who put several of her litters in the
            eaves box of the old shed. In daily expansion sessions, the paws get
            access to the sleeve under the abdomen"
        />
        <Card
          img={img2}
          title="OLIVER"
          description="  Pääsu is a good cat mother who put several of her litters in the
            eaves box of the old shed. In daily expansion sessions, the paws get
            access to the sleeve under the abdomen"
        />
        <Card
          img={img3}
          title="OLIVER"
          description="  Pääsu is a good cat mother who put several of her litters in the
            eaves box of the old shed. In daily expansion sessions, the paws get
            access to the sleeve under the abdomen"
        />
        <Card
          img={img4}
          title="OLIVER"
          description="  Pääsu is a good cat mother who put several of her litters in the
            eaves box of the old shed. In daily expansion sessions, the paws get
            access to the sleeve under the abdomen"
        />
      </div>
      <div className=" w-full mt-6 flex justify-center">
        <Link to="/cats">
          <Button
            text="SEE ALL CATS"
            width="170px"
            height="40px"
            bg="#F37033"
          />
        </Link>
      </div>
      <div className="w-full mt-8">
        <h2 className="text-center">How can you help?</h2>
      </div>
      <div className="mt-10 ml-9 mr-9">
        <img src={Frame2} alt="Frame2" />
      </div>
    </div>
  );
};

export default Home;
