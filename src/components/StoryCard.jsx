import React from 'react'

const StoryCard = ({label, img, btn}) => {
  return (
    <div className='w-80 h-full bg-white shadow-lg p-6 rounded-3xl my-5'>
        <img className=' rounded-3xl' src={img} alt="img" />
        <p className='font-semibold font-mon text-xl text-black my-5'>{label}</p>
        <button className='w-full px-5 py-2 border-2 text-2xl font-black rounded-3xl'>Read More</button>
    </div>
  )
}

export default StoryCard;