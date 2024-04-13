// ASSETS IMPORTS
import dropComet from "/assets/icons/astronauts.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";

const Funbook = () => {
  return (
    <section className=" text-white flex justify-between items-center bg-blue md:p-20 p-5 py-10">
      <div className="">
        <h2 className="font-bold font-space text-5xl underline decoration-coral decoration-8">
          The Planetary Funbook
        </h2>
        <img className="sm:hidden my-5" src={dropComet} alt="img" />
        <p className="font-mon font-bold md:font-thin text-3xl xs:text-5xl md:text-silver text-coral my-10 leading-normal">
          Tour the cosmos, CIAlien-style. Discover the universe’s galaxies,
          planets, black holes, and stellar mysteries.
        </p>
        <PrimaryBtn label="Rocket Through Our Cosmic Facts" />
      </div>
      <img className="w-1/3 hidden sm:block" src={dropComet} alt="img" />
    </section>
  );
};

export default Funbook;
