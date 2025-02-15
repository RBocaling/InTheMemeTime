import React from "react";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="relative container mx-auto  flex flex-col items-center justify-center pt-10 md:pt-16 z-30">
        <div className="flex flex-col items-center justify-center -rotate-6 z-30 md:pt-12">
          <motion.h1
            initial={{ opacity: 0, y: -100, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="title-text text-stroke-lg text-5xl md:text-12xl text-yellow-500 font-bold md:leading-[12rem]"
          >
            InTheMemeTime
          </motion.h1>
        </div>

        <img
          src="/img2/hero.png"
          className="w-full md:w-1/2 -mt-7 md:-mt-28 z-30 clock"
          alt=""
        ></img>
        <motion.div
          initial={{ opacity: 0, marginRight: -100 }}
          animate={{ opacity: 1, marginRight: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col gap-5 md:absolute top-2/3 -right-20 md:-translate-y-1/2 max-w-xl w-full p-5"
        >
          <h1 className="title-text text-stroke-sm text-3xl font-bold text-yellow-500 pb-3 flex flex-wrap items-center justify-center gap-5">
            HOLD TILL THE{" "}
            <span className="title-text text-stroke-sm text-3xl text-white flex items-center underline">
              CL
              <img src="/img2/logo.png" className="w-10" />
              CK
            </span>{" "}
            STRIKES GOLD
          </h1>
          <h1 className="title-text text-stroke-sm text-3xl text-center md:text-right md:text-5xl text-white font-bold">
            BUY ITMT OR GET CLOCK BLOCKED.
          </h1>
        </motion.div>
      </div>

      <img
        src="/img2/bgDesktop.jpg"
        className="w-full h-full absolute top-0 left-0 opacit md:opacity-35 z-15 bg-cover"
        alt=""
      />
      <SlidingText
        isYspace={true}
        label="CA: AATECgWF4KjALbpgUXjabqFKHmdtjWdfdFNzCH3ipump"
      />
    </section>
  );
};

export default Hero;
