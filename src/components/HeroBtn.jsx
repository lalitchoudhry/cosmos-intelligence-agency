

const HeroBtn = ({label, href, handleClick}) => {
  return (
    <a className="bg-yellow font-black text-black text-xl px-5 py-4 w-full cursor-pointer shadow-button shadow-green hover:shadow-inner hover:bg-green hover:text-white border-4" href={href} >{label}</a>
  )
}

export default HeroBtn;