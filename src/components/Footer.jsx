// ASSETS
import logo from "/assets/icons/cia-logo.png";

// CONSTANTS
import { FOOTER_LINK } from "../constants";

const Footer = () => {
  return (
    <footer className=" text-white md:p-20 p-5 bg-black flex flex-col justify-between w-full">
      <div className="flex justify-start items-center">
        {/* You've hit the bottom of the space barrel!💥 */}
        <img className="w-20" src={logo} alt="img" />
        <span className="text-xl sm:text-3xl font-orb flex flex-col">
          Cosmic Intelligence Agency <span className="text-base text-silver">The Gaurdians Of Galaxy</span>
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mt-5 font-space ">
        <div>
          <h5 className="text-xl">Galactic Hub🚿</h5>
          <ul className="child:text-[#9DB4FF] child-hover:underline">
            <li>
              <a className="" href="/">
                Galactic Home Base🚀
              </a>
            </li>
            <li>
              <a href="/contact">Signal Frequencies🗾</a>
            </li>
            <li>
              <a href="/privacy">Space Laws Apply🚨</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex sm:justify-end sm:items-end items-start justify-start">
            <a className="text-3xl" href="http://facebook.com">
              🪐
            </a>
            <a className="text-3xl" href="http://twitter.com">
              🌟
            </a>
            <a className="text-3xl" href="http://instagram.com">
              👽
            </a>
          </ul>
          <p className="text-silver text-sm">
            Don't space out—check us out on social media!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
