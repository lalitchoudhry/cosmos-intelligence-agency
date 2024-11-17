// ASSETS IMPORTS
import dropComet from "/assets/icons/astronauts.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";

const Funbook = () => {
  return (
    <section className=" text-white flex justify-between items-center bg-blue md:p-20 p-5 py-10">
      <div className="">
        <h2 className="font-bold font-orb text-5xl sm:text-7xl">
          The Planetary Funbook
        </h2>
        <img className="md:hidden my-5" src={dropComet} alt="img" />
        <p className=" max-w-xl font-mon text-2xl md:text-silver text-coral my-10 leading-normal">
          Tour the cosmos, CIAlien-style. Discover the universe’s galaxies,
          planets, black holes, and stellar mysteries.
        </p>
        <PrimaryBtn label="Rocket Through Our Cosmic Facts" href="#" />
      </div>
      <img className="w-1/3 hidden md:block" src={dropComet} alt="img" />
    </section>
  );
};

export default Funbook;
