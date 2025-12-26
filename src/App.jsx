import React from "react";
import { div } from "framer-motion/client";
import MacNavBar from "./components/MacUi/MacNavBar";
import { Welcome } from "./components/MacUi/Welcome";
import MacDock from "./components/MacUi/Dock";
import { Draggable } from "gsap/all";
import gsap from "gsap";
import Terminal from "./components/Windows/Terminal";
import Portfolio from "./components/MacUi/Portfolio";
import Resume from "./components/MacUi/Resume";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <>
      <MacNavBar />
      <Welcome></Welcome>
      <MacDock></MacDock>

      <Terminal></Terminal>
      <Portfolio />
      <Resume />
    </>
  );
};

export default App;
