import React from "react";

const StoryCard = ({ label, img, href }) => {
  return (
    <div className="w-80 h-full bg-white shadow-lg  my-5">
      <img className="p-3" src={img} alt="img" />
      <p className="font-semibold font-mon text-xl text-black line-clamp-2 p-3">{label}</p>
      <button className="w-full">
        <a
          href={href}
          className="w-full flex items-center justify-center p-5 text-black text-2xl font-orb font-black  bg-yellow hover:animate-ping"
        >
          Read More
        </a>
      </button>
    </div>
  );
};

export default StoryCard;
