// ASSETS IMPORTS
import homeBanner from "/assets/videos/space-back.mp4";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full flex justify-center items-center ">
        <video
          className="w-full absolute -z-10 top-0"
          src={homeBanner}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="text-white flex flex-col justify-center p-20 ">
          <h1 className="text-7xl font-black w-1/2 text-white font-orb">
            Unlocking the universe's secrets, one mystery at a time.
          </h1>
          <p className="font-semibold text-md my-5">
            We accomplish what others cannot accomplish and go where others
            cannot go
          </p>
          <p className="text-lg w-1/2 font-space">
          A career at Cosmic Intelligence Agency is out of this world! We're searching the cosmos for all kinds of beings to join our celestial squad
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
