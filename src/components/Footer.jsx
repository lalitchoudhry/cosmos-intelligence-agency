import React from "react";
import { FOOTER_LINK } from "../constants";

const Footer = () => {
  return (
    <footer className=" text-white md:p-20 p-5 bg-black/60">
      <div className="flex flex-wrap justify-between">
        {FOOTER_LINK.map(({ head, links }) => (
          <div key={head}>
            <h5 className="text-2xl font-bold font-space my-2">{head}</h5>
            <ul>
              {links.map(({ label, value }) => (
                <li key={label} className="font-space my-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-pink duration-300 text-base"><a href="#">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between my-5">
        <div>
            <button>Cosmic Intel</button>
            <button>Alien Hotline</button>
        </div>
        <div>
            <h5 className="text-base font-black font-space">Connect with CIA</h5>
        </div>
      </div>
      <div>
        {/* <ul className="flex flex-wrap justify-between font-space text-xs md:text-base">
            <li><a href="#">Search CIA.gov</a></li>
            <li><a href="#">Site Policies</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">No FEAR Act</a></li>
            <li><a href="#">ECA Notice</a></li>
            <li><a href="#">Inspector General</a></li>
            <li><a href="#">GOV</a></li>
            <li><a href="#">Site map</a></li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
