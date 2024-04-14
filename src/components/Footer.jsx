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
        <div className="my-2">
          <h5 className="text-2xl">Galactic Hub 🚿</h5>
          <ul className="child:text-[#9DB4FF] child-hover:hover-social-link child:text-lg">
            <li>
              <a className="" href="/">
              🚀 Galactic Home Base
              </a>
            </li>
            <li>
              <a href="#">🗾 Signal Frequencies </a>
            </li>
            <li>
              <a href="#">🚨 Space Laws Apply</a>
            </li>
          </ul>
        </div>
        <div className="my-2">
          <ul className="flex flex-col sm:justify-end md:items-end items-start justify-start text-[#9DB4FF] child-hover:hover-social-link child:text-lg">
            <a className="" href="http://facebook.com">
              🪐 Facebook
            </a>
            <a className="" href="http://twitter.com">
              🌟 Twitter
            </a>
            <a className="" href="http://instagram.com">
              👽 Instagram
            </a>
            <a className="" href="http://instagram.com">
              🤖 Discord
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
