
// ASSETS IMPORTS
import astroDog from "/assets/images/asto-dog.jpg";
import story1 from "/assets/images/story-1.jpg";
import story2 from "/assets/images/story-2.jpg";
// import funbookBanner from "/assets/images/funbook.jpg";
import solarSystem from "/assets/images/solar-system.png";

// COMPONENTS IMPORTS
import StoryCard from "../components/StoryCard";

const Story = () => {
  return (
    <section className=" bg-black/60">
        <div className=" sm:p-20 p-5">
          <h2 className="font-bold font-space text-5xl sm:text-7xl text-white underline decoration-green decoration-8">
            Planetory Tales
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center my-10">
            <StoryCard
              label="A Holiday to Remember: CIA Edition"
              img={astroDog}
            />
            <StoryCard
              label="From Magic Kingdoms to Battlefields: The Bob Broughton Saga"
              img={story1}
            />
            <StoryCard label="Gazing at the Stars of Savvy" img={story2} />
          </div>
        </div>
      </section>
  )
}

export default Story;