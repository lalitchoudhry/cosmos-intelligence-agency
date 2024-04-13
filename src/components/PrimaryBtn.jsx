import React from 'react'

const PrimaryBtn = ({label}) => {
  return (
    <button className='text-lg sm:text-2xl font-black font-orb border-4 p-2 bg-coral text-black shadow-button shadow-teal hover:scale-95 hover:shadow-inner'>{label}</button>
  )
}

export default PrimaryBtn;