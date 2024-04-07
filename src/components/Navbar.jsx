
// ASSETS IMPORTS
import contact from "/assets/icons/alien-contact.png"
import report from "/assets/icons/planet-report.png"

const Navbar = () => {
  return (
    <header className=" sticky top-0 text-white bg-black w-full flex justify-between items-center p-5 bg-opacity-80">
      <div>
        <span className="font-black text-4xl font-cosmic">CIA</span>
      </div>
      <nav>
        <ul className="flex font-semibold text-xl font-comic child-hover:underline child:decoration-pink">
          <li className="mx-3"><a href="#">Today's CIA</a></li>
          <li className="mx-3"><a href="#">Cosmic Careers</a></li>
          <li className="mx-3"><a href="#">Space Saga</a></li>
          <li className="mx-3"><a href="#">Memesphere</a></li>
          <li className="mx-3"><a href="#">Planetarium</a></li>
        </ul>
      </nav>
      <div>
        <ul className="flex font-comic text-base child-hover:underline child:decoration-pink">
          <li className="mx-2 flex flex-col justify-center items-center"><img className="w-12" src={contact} alt="icon" /><a href="#">Alien Hotline</a></li>
          <li className="mx-2 flex flex-col justify-center items-center"><img className="w-12" src={report} alt="icon" /><a href="#">Cosmic Intel</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
