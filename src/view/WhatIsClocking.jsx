import React from "react";
import { motion } from "framer-motion";
import SlidingText from "../components/SlidingText";

const WhatIsClocking = () => {
  return (
    <section id="about" className="relative w-full  bg-black">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center md:justify-end px-5 py-12 z-30 ">
        <div className="relative w-full ">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text flex items-center gap-7 text-stroke-sm text-4xl md:text-6xl mb-4 text-red-500 font-bold whitespace-nowrap md:leading-[12rem]"
          >
            WTF IS#CLOCKBLOCKING?{" "}
            <img
              src="/img2/clock.png"
              className="bg-red-500s w-32 about-img"
              alt=""
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-sm text-xl md:text-4xl text-white font-bold mb-9"
          >
            Tick. Tock. The meme season waits for no one. <br />
            <br />
            #CLOCKBLOCKING is the truest degen play: a movement where timing is
            everything and the stakes are as high as your ambition. <br />
            <br />
            It’s about outlasting the FOMO, blocking distractions, and HODLing
            like your portfolio depends on it! Because it f*cking does.
            <br />
            This is a way of life for those who live for the rush of perfectly
            timed entries, viral memes, and ridiculous gains only true degens
            could understand.
            <br />
            <br />
            ITMT is about creating frenships, chasing glory, and riding the wave
            of Solana-speed action. <br />
            <br />
            Join the #CLOCKBLOCKING movement, where we turn waiting for the bull
            run into an in-the-meme-time viral, laugh-until-it-hurts,
            meme-fueled frenzy. TIMEMAP
          </motion.p>
        </div>
      </div>

      <div className="mt-10">
        {" "}
        <SlidingText label="#CLOCKBLOCKING" />
      </div>
    </section>
  );
};

export default WhatIsClocking;
