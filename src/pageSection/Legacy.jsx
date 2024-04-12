import { useRef } from 'react';
import { useIsVisible } from '../utils/useIsVisible';

// ASSETS IMPORTS
import solarSystem from '/assets/images/solar-system.png';

const Legacy = () => {
  
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  // const isVisible2 = useIsVisible(ref2);

  return (
    <section className=" text-white flex flex-col-reverse md:flex-row justify-center items-center p-5 sm:p-20 bg-black/60 relative">
      <img ref={ref1} className={`w-1/2 hidden md:block  absolute top-0 right-0 animate-visible ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`} src={solarSystem} alt='img' />
    <div className=" text-justif border-l-2 border-pink pl-1">
          <h2 className=" font-bold font-mon text-5xl sm:text-9xl my-5">
            Our Cosmic Chronicles
          </h2>
          <p className=" font-black font-orb my-10 md:w-1/2">
            Our cosmic legacy is one of intrepid explorers dedicated to
            interstellar shenanigans, fulfilling our meme mission with cosmic
            chaos and celestial wit.
          </p>
          <p className="font-mon text-xl my-5 md:w-1/2">
            Guarding the cosmos is our cosmic quest — yesterday, today, and
            beyond. From our intergalactic origins to now, we uphold the legacy
            of cosmic wit, stellar courage, and interstellar shenanigans that
            have propelled us to become the universe's top meme intelligence
            agency
          </p>
          <button className="my-5">Get Lost in Our Spacey Stories</button>
        </div>
      </section>
  )
}

export default Legacy;