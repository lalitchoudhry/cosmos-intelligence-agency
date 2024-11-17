import { useRef } from "react";
import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS
import solarSystem from "/assets/images/solar-system.png";
import PrimaryBtn from "../components/PrimaryBtn";

const Legacy = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  // const isVisible2 = useIsVisible(ref2);

  return (
    <section className=" text-white flex flex-col-reverse md:flex-row justify-between items-center p-5 py-10 md:p-20 bg-black relative">
      <img
        ref={ref1}
        className={`w-1/2 hidden md:block  absolute bottom-0 right-0 animate-visible ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        src={solarSystem}
        alt="img"
      />
      <div className="text-justif border-l-2 border-pink pl-1">
        <h2 className=" font-bold font-mon text-5xl sm:text-7xl my-5">
          Our Cosmic Chronicles
        </h2>
        <p className="md:w-1/2 font-bold text-lg font-orb my-10 ">
          Our cosmic legacy is one of intrepid explorers dedicated to
          interstellar shenanigans, fulfilling our meme mission with cosmic
          chaos and celestial wit.
        </p>
        <p className="md:w-1/2 font-mon text-base sm:text-xl my-10 ">
          Guarding the cosmos is our cosmic quest — yesterday, today, and
          beyond. From our intergalactic origins to now, we uphold the legacy of
          cosmic wit, stellar courage, and interstellar shenanigans that have
          propelled us to become the universe's top meme intelligence agency
        </p>
        <PrimaryBtn label="Get Lost in Our Spacey Stories" href="" />
      </div>
    </section>
  );
};

export default Legacy;
