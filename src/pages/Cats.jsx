import Card from "../components/Card";
import Banner from "../components/Banner";
import img1 from "../assets/Rectangle 3.png";
import img2 from "../assets/Rectangle 4.png";
import img3 from "../assets/Rectangle 5.png";
import img4 from "../assets/Rectangle 6.png";
import BannerImg from "../assets/Banner.png";

const Cats = () => {
  return (
    <div>
      <Banner img={BannerImg} bottom="20%" />
      <div className="flex flex-wrap justify-around mt-10 ms-9 me-9">
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
    </div>
  );
};

export default Cats;
