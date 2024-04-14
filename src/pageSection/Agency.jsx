import { useRef } from "react";
import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS
import eyePatch from "/assets/icons/eye-patch.png";

// COMPONENTS
import PrimaryBtn from "../components/PrimaryBtn";

const Agency = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center md:p-20 p-5 py-10">
      <div className={`flex flex-col-reverse md:flex-col justify-center items-center animate-visible ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}>
        <img ref={ref2} src={eyePatch} alt="img" className="w-2/3" />
        <h3 className="font-bold text-3xl sm:text-5xl font-orb my-5 underline decoration-teal decoration-8">
          Our Intergalactic HQ
        </h3>
      </div>
      <div
        ref={ref1}
        className={`md:w-1/2 flex flex-col justify-between text-justify my-10 animate-visible ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h4 className="font-bold text-md sm:text-2xl font-mon">
          Equipping leaders with celestial wisdom, safeguarding our space-faring
          civilization from cosmic calamities!
        </h4>
        <p className="font-comic my-10 text-2xl ">
          As the galaxy's top interstellar meme agency, our cosmic antics are
          crucial to universal hilarity. We gather and analyze extraterrestrial
          humor, and occasionally pull off cosmic pranks. Even the President of
          the Milky Way can't resist a chuckle from our cosmic memes.
        </p>
        <PrimaryBtn label="Discover Our Cosmic Story" />
      </div>
    </section>
  );
};

export default Agency;
