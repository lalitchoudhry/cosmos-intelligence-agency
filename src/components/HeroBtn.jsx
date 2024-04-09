

const HeroBtn = ({label, href, handleClick}) => {
  return (
    <a className="bg-yellow font-black text-black text-xl px-5 py-4 w-full cursor-pointer" href={href} >{label}</a>
  )
}

export default HeroBtn;