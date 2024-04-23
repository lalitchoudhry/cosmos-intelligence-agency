import { useState } from "react";

// ASSETS IMPORTS
import logo from "/assets/icons/cia-logo.png";
import contact from "/assets/icons/alien-contact.png";
import report from "/assets/icons/planet-report.png";

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className=" fixed top-0 text-white bg-black w-full flex justify-between items-center p-5 bg-opacity-80 z-10 ">
      <div className="flex justify-between items-center">
        <img className="w-20" src={logo} alt="img" />
        <span className="font-black text-4xl font-cosmic">CIA</span>
      </div>
      <nav>
        <ul
          className={`${
            showMobileNav
              ? "flex flex-col items-center absolute bg-blue w-full top-28 left-0 child:mobile-nav"
              : "hidden md:flex font-semibold text-xl font-comic child-hover:underline child:decoration-pink"
          }`}
        >
          <li className="mx-3">
            <a href="https://www.cia.gov/about/">Today's CIA</a>
          </li>
          <li className="mx-3">
            <a href="https://www.cia.gov/careers/">Cosmic Careers</a>
          </li>
          <li className="mx-3">
            <a href="https://www.cia.gov/podcast/the-langley-files">Space Saga</a>
          </li>
          <li className="mx-3">
            <a href="https://www.cia.gov/legacy/museum/">Memesphere</a>
          </li>
          <li className="mx-3">
            <a href="https://www.cia.gov/resources/world-leaders/">Planetarium</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex font-comic text-base child-hover:underline child:decoration-pink">
          <a
            href="https://www.usa.gov/"
            className="mx-2 flex flex-col justify-center items-center"
          >
            <img className="w-12" src={contact} alt="icon" />
            <span className="hidden sm:block">Alien Hotline</span>
          </a>
          <a
            href="https://www.linkedin.com/company/central-intelligence-agency"
            className="mx-2 flex flex-col justify-center items-center"
          >
            <img className="w-12" src={report} alt="icon" />
            <span className="hidden sm:block">Cosmic Intel</span>
          </a>
      <div
        className="md:hidden w-8 h-8 flex justify-between flex-col"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <div className={`w-full p-0.5 m-1.5 bg-yellow rounded ${showMobileNav ? "" : ""}`}></div>
        <div className={`w-full p-0.5 m-1.5 bg-yellow rounded ${showMobileNav ? " origin-center rotate-45" : ""}`}></div>
        <div className={`w-full p-0.5 m-1.5 bg-yellow rounded ${showMobileNav ? "" : ""}`}></div>
      </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
