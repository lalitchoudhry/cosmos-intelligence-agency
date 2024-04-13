// ASSETS IMPORTS


// COMPONENTS IMPORTS
import Footer from "../components/Footer";


// PAGE SECTION
import Hero from "../pageSection/Hero";
import Agency from "../pageSection/Agency";
import Legacy from "../pageSection/Legacy";
import Story from "../pageSection/Story";
import Funbook from "../pageSection/Funbook";

const Home = () => {
  return (
    <div className="">
      {/* -------------------------- HERO SECTION */}
      <Hero />
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
