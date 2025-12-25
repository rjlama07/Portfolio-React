import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Technologies from "../Technologies";
import Experience from "../experiece";
import Projects from "../poject";
import Contact from "../contact";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Portfolio = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl w-[80vw]">
      <div id="window-header" className="bg-white">
        <WindowControl target="safari" />
        <div className="flex items-center gap-3 flex-1 ml-8">
          <PanelLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
          <div className="flex items-center gap-1">
            <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ChevronRight className="w-5 h-5 text-gray-400 cursor-not-allowed" />
          </div>
          <div className="flex items-center gap-3 flex-1 max-w-2xl mx-auto">
            <ShieldHalf className="w-5 h-5 text-gray-600" />
            <div className="search flex-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value="http://rjlama.com.au"
                className="flex-1 outline-none text-sm"
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Share className="w-5 h-5 text-gray-600 cursor-pointer icon" />
            <Plus className="w-5 h-5 text-gray-600 cursor-pointer icon" />
            <Copy className="w-5 h-5 text-gray-600 cursor-pointer icon" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-neutral-300 antialaised selection:bg-cyan-300 selection:text-cyan-900 h-[80vh] overflow-y-auto overflow-x-hidden">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="mx-auto px-8 container">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};
export default WindowWrapper(Portfolio, "safari");
