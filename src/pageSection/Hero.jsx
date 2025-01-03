

// ASSETS IMPORTS
import homeBanner from "/assets/videos/solar-back.mp4";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import HeroBtn from "../components/HeroBtn";

const Hero = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center relative h-screen">
      <Navbar />
      <video
        className="w-full h-full object-cover"
        src={homeBanner}
        type="video/mp4"
        autoPlay
        muted
        loop
        height="200"
        width={100}
      ></video>
      <div className="absolute text-white flex flex-col justify-between item-center sm:text-start mt-20 md:p-20 p-5">  
        <h1 className="text-5xl md:text-7xl font-semibold sm:w-2/3 text-white font-orb my-10 md:my-5 leading-[50px] lg:leading-[100px]">
        Spying Since the Big Bang
        </h1>
        <p className="max-w-lg font-semibold text-lg font-mon md:text-md my-2 ">
          We accomplish what others cannot accomplish and go where others cannot go
        </p>
        <p className="text-base sm:text-lg md:w-1/2 font-mon my-5 text-justify">
          A career at Cosmic Intelligence Agency is out of this world! We're
          searching the cosmos for all kinds of beings to join our celestial
          squad
        </p>
        <div className="my-10">
          {/* <div className="border-2 border-pink animate-ping"></div> */}
          <HeroBtn label="Get Your Cosmic Destiny" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
