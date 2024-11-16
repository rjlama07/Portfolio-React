import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="text-neutral-300 overflow-x-hidden antialaised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="mx-auto px-8 container">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </div>
  );
};

export default App;
