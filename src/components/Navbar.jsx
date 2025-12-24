import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10 text-4xl">RJ</h1>
      </div>
      <div className="m-8 flex justify-center gap-4 text-2xl">
        {/* <a
          href="https://www.linkedin.com/in/ritesh-lama-b343b12b4/"
          className="transform transition-transform duration-200 hover:scale-125"
        >
          <FaLinkedin />
        </a> */}
        <a
          href="https://github.com/rjlama07"
          className="transform transition-transform duration-200 hover:scale-125"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://www.instagram.com/its_rjlama/"
          className="transform transition-transform duration-200 hover:scale-125"
        >
          <FaInstagram />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;

// transform transition-transform duration-200 hover:scale-125
