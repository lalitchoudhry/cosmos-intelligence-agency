// ASSETS IMPORTS
import homeBanner from "/assets/videos/space-back-7.mp4";
import mockery from "/assets/icons/mockery.png";


// COMPONENTS IMPORTS
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";


// PAGE SECTION
import Hero from "../pageSection/Hero";
import Agency from "../pageSection/Agency";
import Legacy from "../pageSection/Legacy";
import Story from "../pageSection/Story";
import Funbook from "../pageSection/Funbook";

const Home = () => {
  return (
    <div className="bg-story bg-center bg-no-repeat bg-cover ">
      {/* -------------------------- HERO SECTION */}
      <Hero />
      {/* <Marquee /> */}
      {/* -------------------------- AGENCY SECTION */}
      <Agency />

      {/* ------------------------ LEGACY SECTION */}
      <Legacy />

      {/* ------------------------- STORIES SECTION */}
      <Story />

      {/* -------------------------- FACTBOOK SECTION */}
      <Funbook />

      {/* --------------------------------- FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
