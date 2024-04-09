// ASSETS IMPORTS
import homeBanner from "/assets/videos/space-back-7.mp4";
import eyePatch from "/assets/icons/eye-patch.png";
import mockery from "/assets/icons/mockery.png";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBtn from "../components/HeroBtn";

const Home = () => {
  return (
    <div className="xl:max-w-screen-xl w-full">

      {/* ---------------------------------------------------------------------------------- HERO SECTION */}
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
        <div className="absolute text-white flex flex-col justify-between item-center sm:text-start text-center mt-20 sm:p-20 p-5">
          <h1 className="text-5xl md:text-7xl font-black sm:w-2/3 text-white font-comic my-5">
            Unlocking the universe's secrets, one mystery at a time.
          </h1>
          <p className="font-semibold text-base md:text-md my-5">
            We accomplish what others cannot accomplish and go where others
            cannot go
          </p>
          <p className="text-base sm:text-lg md:w-1/2 font-space my-5">
            A career at Cosmic Intelligence Agency is out of this world! We're
            searching the cosmos for all kinds of beings to join our celestial
            squad
          </p>
          <div className="my-10">
            {/* <div className="border-2 border-pink animate-ping"></div> */}
            <HeroBtn label="Find Your Cosmic Destiny" />
          </div>
        </div>
      </main>

      {/* ------------------------------------------------------------------------------------- AGENCY SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-center sm:p-20 p-5">
        <div className="flex flex-col-reverse md:flex-col justify-center items-center">
          <img src={eyePatch} alt="img" className="w-2/3" />
          <h3 className="font-bold text-4xl font-orb my-5">
            Our Intergalactic HQ
          </h3>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between text-justify my-10">
          <h4 className="font-black text-md sm:text-xl font-mon">
            Equipping leaders with celestial wisdom, safeguarding our
            space-faring civilization from cosmic calamities!
          </h4>
          <p className="font-mon my-10 ">
            As the galaxy's top interstellar meme agency, our cosmic antics are
            crucial to universal hilarity. We gather and analyze
            extraterrestrial humor, and occasionally pull off cosmic pranks.
            Even the President of the Milky Way can't resist a chuckle from our
            cosmic memes.
          </p>
          <p className=" decoration-pink underline">Discover Our Cosmic Story</p>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------- LEGACY SECTION */}
      <section className="bg-blue text-white flex justify-between p-5 sm:p-20">
        <div>
          <img src={mockery} alt="img" />
        </div>
        <div className="md:w-1/2 ">
          <h2 className="font-semibold font-space text-6xl my-5">Our Cosmic Chronicles</h2>
          <p className="md:w-3/4 font-black font-orb my-10">Our cosmic legacy is one of intrepid explorers dedicated to interstellar shenanigans, fulfilling our meme mission with cosmic chaos and celestial wit.</p>
          <p className="font-mon my-5">Guarding the cosmos is our cosmic quest — yesterday, today, and beyond. From our intergalactic origins to now, we uphold the legacy of cosmic wit, stellar courage, and interstellar shenanigans that have propelled us to become the universe's top meme intelligence agency</p>
          <button className="my-5">Get Lost in Our Spacey Stories</button>
        </div>
      </section>

      {/* -------------------------------------------------------------------------------------- STORIES SECTION */}
      <section className=" sm:p-20 p-5">
        <h2 className="font-bold font-space text-5xl">Planetory Tales</h2>
        <div></div>
      </section>

      {/* ------------------------------------------------------------------------------------ FACTBOOK SECTION */}
      <section className="bg-purple text-white sm:p-20 p-5">
        <h2 className="font-bold font-space text-5xl">The Planetary Funbook</h2>
      </section>

      {/* -------------------------------------------------------------------------------------- FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
