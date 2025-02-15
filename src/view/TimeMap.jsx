import React from "react";
import Button from "../components/Button";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";

const TimeMap = () => {
  return (
    <section id="about" className="relative w-full bg-[rgb(235, 69, 23)]">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-7 md:justify-end px-5 pt-12 md:pt-0 z-30 ">
        <div className="relative w-full md:w-1/2 pl-4">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-md text-6xl md:text-8xl mb-4 text-yellow-500 text-center font-bold whitespace-nowrap md:leading-[12rem]"
          >
            TIMEMAP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="title-text text-stroke-sm text-2xl md:text-4xl text-white font-bold mb-9"
          >
            Every tick of the clock moves us closer to meme season glory. Our
            roadmap is a precise blend of chaos and strategy, designed to make
            time work in your favor. Here’s how we’re setting the pace:
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="title-text text-stroke-sm text-2xl md:text-4xl text-white font-bold mb-9"
          >
            AND JUST LIKE THAT, THE CYCLE RESTARTS. BECAUSE TIME MAY BE FINITE,
            BUT MEME SEASON WILL NEVER END
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src="/img2/img1.jpg"
            className="bg-red-500s w-full about-img rounded-lg"
            alt=""
          />
        </motion.div>
      </div>
      <img
        src="/img/about_bg.png"
        className="w-full h-full absolute top-0 left-0 opacity-5 z-10"
        alt=""
      />
      <div className="mt-10">
        {" "}
        <SlidingText label="#CLOCKBLOCKING" />
      </div>
    </section>
  );
};

export default TimeMap;
