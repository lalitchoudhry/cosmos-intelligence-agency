import React from 'react'

const PrimaryBtn = ({label, href}) => {
  return (
    <a href={href} className='text-lg sm:text-2xl font-black font-orb border-4 p-2 bg-coral text-white border-black shadow-button shadow-teal hover:scale-95 hover:shadow-inner'>{label}</a>
  )
}

export default PrimaryBtn;