import { useState } from "react";

// ASSETS IMPORTS
import logo from "/assets/icons/cia-logo.png";

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className=" fixed top-0 text-white bg-black w-full flex justify-between items-center p-5 bg-opacity-80 z-10 ">
      <div className="flex justify-between items-center">
        <img className="w-20" src={logo} alt="img" />
        <span className="font-black text-5xl font-orb">CIA</span>
      </div>
      <nav>
        <ul
          className={`transition duration-300 ${
            showMobileNav
              ? "flex flex-col items-center absolute bg-blue w-full top-28 left-0 border-b-4 child:mobile-nav translate-y-0"
              : "invisible md:visible child:hidden md:child:block md:flex font-semibold text-lg font-mon child:nav-link -translate-y-96 md:translate-y-0"
          }`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Missions</a>
          </li>
          <li>
            <a href="#">Agents</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="hidden md:flex font-mon text-base child-hover:underline child:decoration-pink">
          <a
            href="#"
            className="mx-3 flex flex-col justify-center items-center"
          >
            <i className="bi bi-telegram text-3xl hover:text-pink"></i>
          </a>
          <a
            href="#"
            className="mx-3 flex flex-col justify-center items-center"
          >
            <i className="bi bi-twitter-x text-3xl hover:text-pink"></i>
          </a>
        </ul>
        <div
          className="md:hidden"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <div
            className={`bg-yellow w-8 h-1 m-1.5 rounded-full transition ${
              showMobileNav
                ? "rotate-45 translate-y-2.5 duration-300"
                : "rotate-0 translate-y-0 duration-300"
            }`}
          ></div>
          <div
            className={`bg-yellow w-8 h-1 m-1.5 rounded-full transition ${
              showMobileNav
                ? "scale-x-0 duration-300"
                : "scale-x-1 duration-300"
            }`}
          ></div>
          <div
            className={`bg-yellow w-8 h-1 m-1.5 rounded-full transition ${
              showMobileNav
                ? "-rotate-45 -translate-y-2.5 duration-300"
                : "-rotate-0 -translate-y-0 duration-300"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
