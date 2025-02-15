import React from "react";
import Button from "../components/Button";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";

const Introducing = () => {
  return (
    <section id="about" className="relative w-full bg-[rgb(235, 69, 23)]">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end px-5 pt-12 md:pt-0 z-30 ">
        <div className="relative w-full md:w-1/2 pl-4">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-md text-3xl md:text-6xl mb-4 text-yellow-500 font-bold whitespace-nowrap md:leading-[12rem]"
          >
            INTRODUCING OL' TIMER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="title-text text-stroke-sm text-2xl md:text-4xl text-white font-bold mb-9"
          >
            Behind it all is Ol’ Timer, an OG dev who’s already sent a project
            to a couple billi in the last bull run while you were still figuring
            out how to spell "rug pull."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="title-text text-stroke-sm text-2xl md:text-4xl text-white font-bold mb-9"
          >
            You'' either find him meme-ing or trading for the gainz.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="title-text text-stroke-sm text-2xl md:text-4xl text-white font-bold mb-9"
          >
            Seriously unserious when he memes but moves like clockwork when it's
            business time!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src="/img2/logo.png"
            className="bg-red-500s w-full about-img"
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

export default Introducing;
