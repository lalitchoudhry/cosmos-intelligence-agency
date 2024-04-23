// ASSETS
import logo from "/assets/icons/cia-logo.png";

// CONSTANTS
import { FOOTER_LINK } from "../constants";

const Footer = () => {
  return (
    <>
    <footer className=" text-white md:p-20 p-5 bg-black flex flex-col justify-between w-full">
      <div className="flex justify-start items-center">
        {/* You've hit the bottom of the space barrel!💥 */}
        <img className="w-20" src={logo} alt="img" />
        <span className="font-bold text-2xl sm:text-4xl font-orb flex flex-col">
          Cosmic Intelligence Agency <span className="text-base text-silver">The Gaurdians Of Galaxy</span>
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mt-5 font-space ">
        <div className="my-2">
          <h5 className="text-2xl mb-2">🚿Galactic Hub</h5>
          <ul className="child:text-[#9DB4FF] child-hover:hover-social-link child:text-lg">
            <li>
              <a className="" href="https://www.cia.gov/about/organization/">
              🚀 Galactic Home Base
              </a>
            </li>
            <li>
              <a href="https://www.cia.gov/about/mission-vision/">🗾 Signal Frequencies </a>
            </li>
            <li>
              <a href="https://www.cia.gov/privacy_policy/">🚨 Space Laws Apply</a>
            </li>
          </ul>
        </div>
        <div className="my-2">
          <ul className="flex flex-col sm:justify-end md:items-end items-start justify-start text-[#9DB4FF] child-hover:hover-social-link child:text-lg">
            <a className="" href="https://www.facebook.com/Central.Intelligence.Agency">
              🪐 Facebook
            </a>
            <a className="" href="https://twitter.com/cia">
              🌟 Twitter
            </a>
            <a className="" href="https://www.instagram.com/cia">
              👽 Instagram
            </a>
            <a className="" href="https://t.me/s/securelycontactingcia">
              🤖 Telegram
            </a>
          </ul>
          <p className="text-silver text-base">
            Don't space out—check us out on social media!
          </p>
        </div>
      </div>
    </footer>
      <div className=" font-bold text-3xl text-center">You've hit the bottom of the space barrel!🛸</div>
      </>
  );
};

export default Footer;
