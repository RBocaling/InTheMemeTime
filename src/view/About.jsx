import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="relative w-full  ">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center md:justify-end px-5 py-12 z-30 ">
        <div className="relative w-full ">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-md text-3xl md:text-6xl mb-4 text-yellow-500 font-bold whitespace-nowrap md:leading-[12rem]"
          >
            WTF IS IN THE MEME TIME?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-sm text-xl md:text-4xl text-white font-bold mb-9"
          >
            Tick-f*cking-tock bitches, the time has come for a new memecoin to
            reign! <br />
            <br />
            The next Bull Run is iminent, we all know it’s coming soon and we
            are all patiently waiting for the crypto gods to bless us, so "In
            The Meme Time"... <br />
            <br />
            we’re here to drag your broke-ass portfolio out of the gutter and
            into meme season glory. <br />
            ITMT is a memecoin, made for the degens, the memes, and the dreamers
            looking for the next 1,000x. <br />
            <br /> Holders will earn passively with USDT just by holding $BRRR
            while supply become more scarce on the buyback & burn mechanism.
          </motion.p>
          <Button
            label="Read Medium Article"
            variant="text-xl py-3 px-9 border"
            isLink={true}
            link="https://medium.com/@in_the_meme_time1/unleashing-the-power-of-itmt-a-vision-for-the-future-of-crypto-0947dac0051a"
          ></Button>
          <motion.img
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src="/img2/piggy.avif"
            className="bg-red-500s w-1/3 about-img absolute top-0 left-0 z-[-1] opacity-25"
            alt=""
          />
          <motion.img
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src="/img2/Money.avif"
            className="bg-red-500s w-1/3 about-img absolute -bottom-20 -right-20 z-[-1] opacity-25"
            alt=""
          />
        </div>
        {/* <div className="relative w-full md:w-1/2 mt-12 md:mt-0 bg-blue-500 h-full">
         
          <img
            src="/img2/Money.avif"
            className="bg-red-500s w-full about-img absolute top-0 left-0"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
