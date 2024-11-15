import React from "react";
import { HERO_CONTENT } from "../constants";
import myImg from "../assets/rj.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ritesh Jung Lama
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Flutter Developer
            </span>
            <p className="mt-6 max-w-xl font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4">
          <img
            src={myImg}
            alt="Ritesh Jung Lama"
            className="w-full max-w-xs lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
