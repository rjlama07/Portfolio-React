import React, { useEffect, useState } from "react";
import { div } from "framer-motion/client";
import MacNavBar from "./components/MacUi/MacNavBar";
import { Welcome } from "./components/MacUi/Welcome";
import MacDock from "./components/MacUi/Dock";
import { Draggable } from "gsap/all";
import gsap from "gsap";
import Terminal from "./components/Windows/Terminal";
import Portfolio from "./components/MacUi/Portfolio";
import Resume from "./components/MacUi/Resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/experiece";
import Projects from "./components/poject";
import MacContact from "./components/MacUi/Contact";
import Finder from "./components/MacUi/Finder";
import Text from "./components/MacUi/Text";
import Image from "./components/MacUi/Image";
import Contact from "./components/contact";
gsap.registerPlugin(Draggable);

gsap.registerPlugin(Draggable);

const App = () => {
  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update the isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="noStyles">
        <div className="global-styles">
          <div className="text-neutral-300 antialaised selection:bg-cyan-300 selection:text-cyan-900  overflow-y-auto overflow-x-hidden">
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
      </div>
    );
  }

  return (
    <>
      <MacNavBar />
      <Welcome />
      <MacDock />
      <Terminal />
      <Portfolio />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <MacContact />
    </>
  );
};

export default App;
