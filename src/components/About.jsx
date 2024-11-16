import React from "react";
import aboutMe from "../assets/Aboutme.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-center text-4xl my-20">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl max-w-full h-auto lg:max-w-md"
              src={aboutMe}
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
