import React from "react";
import {
  RiReactjsLine,
  RiFlutterLine,
  RiSupabaseLine,
  RiFirebaseLine,
  RiNodejsLine,
} from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFlutterLine className="text-7xl text-blue-200 "></RiFlutterLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiSupabaseLine className="text-7xl "></RiSupabaseLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFirebaseLine className="text-7xl"></RiFirebaseLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl"></RiNodejsLine>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
