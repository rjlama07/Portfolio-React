import React from "react";
import { animate, easeIn, motion } from "framer-motion";
import {
  RiReactjsLine,
  RiFlutterLine,
  RiSupabaseLine,
  RiFirebaseLine,
  RiNodejsLine,
} from "react-icons/ri";
import { SiSwift } from "react-icons/si";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center gap-4 justify-center"
      >
        <motion.div
          variants={iconvariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFlutterLine className="text-7xl text-blue-200 "></RiFlutterLine>
        </motion.div>
        <motion.div
          variants={iconvariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSwift className="text-7xl text-blue-200 "></SiSwift>
        </motion.div>
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiSupabaseLine className="text-7xl "></RiSupabaseLine>
        </motion.div>
        <motion.div
          variants={iconvariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFirebaseLine className="text-7xl"></RiFirebaseLine>
        </motion.div>
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine className="text-7xl"></RiNodejsLine>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
