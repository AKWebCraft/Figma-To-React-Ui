import img from "../assets/Banner 2.png";
import Banner from "../components/Banner";

const Volunteer = () => {
  return (
    <div>
      <Banner />
      <div className="mt-6 ml-9 mr-9">
        <h2 className="text-center text-xl">
          if you love animals and new challenges ,you are in the right place Be
          <br /> part of our team
        </h2>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="w-[570px] h-[82px] bg-[#F37033]">
          APPLY FOR VOLUNTEER
        </button>
      </div>
      <div className="mt-10 pl-[200px] pr-[200px]">
        <p>
          Cat shelter operates thanks to the contribution of dozens of good
          volunteers, but we still need a helping hand! If you also want to do
          good, you have this opportunity at MTÜ Kassiabis. <br/><br/>Why volunteer? There
          are not enough fingers on both hands when reading the reasons! First
          of all, you get a lot of good emotions from Kassiab when dealing with
          cats. Peace of mind and knowing that you have helped the weakest are
          an undeniably good feeling! In Kassiab, you also get a lot of
          different experiences depending on what you are going to do in
          Kassiab. These experiences will definitely be useful for you in the
          future! <br/><br/> We are waiting for you at Kassiab, if you are ready to bet
          about 2-3 hours once a week to take care of our kittens! You can help
          with cleaning, feeding cats and simpler treatments. Of course, you can
          play for a couple of hours and a lot of fun! If you are at least 18
          years old, you can come alone (but it is still better with a friend).
          At Kassiab, we always have mentors and other volunteers who will be
          happy to help and guide you.<br/><br/> Of course, you have the opportunity to
          bet in many other ways. We are also looking for people who can
          transport cats to our clinic. If your passion is social media,
          marketing and sponsorship, apply your skills and all new experiences
          with us! If you feel that you would like to bet in another way, feel
          free to let us know!
        </p>
      </div>
    </div>
  );
};

export default Volunteer;
