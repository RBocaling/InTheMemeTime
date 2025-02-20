import React from "react";
import { howtobuy } from "../constant";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <section id="howItWorks" className="relative w-full pb-12">
      <div className="relative container mx-auto flex flex-col items-center justify-center z-30 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="title-text text-stroke-md text-4xl md:text-8xl text-yellow-500 font-bold whitespace-nowrap "
        >
          How To Buy $ITMT?
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full flex flex-col md:flex-row gap-4 items-center justify-center mt-5"
        >
          {howtobuy.map((item, index) => (
            <li
              key={index}
              className="bg-yellow-500 rounded-2xl  w-full md:w-1/3 h-[450px] flex flex-col items-center justify-center gap-4 py-12 px-9 border"
            >
              <h1 className="text-transparent text-8xl font-bold text-stroke-white opacity-25">
                {index + 1}
              </h1>
              <h1 className="text-transparent text-5xl font-bold text-stroke-white -mt-7">
                {item.title}
              </h1>
              <p className="text-lg">{item.desc}</p>
            </li>
          ))}
        </motion.ul>
      </div>
      <img
        src="/img/Sprinkle.svg"
        className="w-full h-full absolute top-0 left-0 z-10 opacity-30"
        alt=""
      />
    </section>
  );
};

export default HowToBuy;
