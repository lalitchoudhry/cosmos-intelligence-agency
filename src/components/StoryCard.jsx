import React from 'react'

const StoryCard = ({label, img, btn}) => {
  return (
    <div className='w-80 h-full bg-white shadow-lg  my-5'>
        <img className='p-3' src={img} alt="img" />
        <p className='font-semibold font-orb text-xl text-black p-3'>{label}</p>
        <button className='w-full p-5 text-white text-2xl font-orb font-black bg-purple hover:animate-ping'>Read More</button>
    </div>
  )
}

export default StoryCard;