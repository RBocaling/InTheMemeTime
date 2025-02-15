import React from "react";
import { socials } from "../constant";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full mt-24">
      <div className="container mx-auto flex flex-col items-center justify-center md:py-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="title-text text-stroke-sm text-4xl md:text-7xl text-yellow-500 font-bold text-center md:leading-[7rem]"
        >
          JOIN THE #CLOCKBLOCKING MOVEMENT
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="title-text text-stroke-xs text-4xl md:text-3xl max-w-5xl text-white font-bold text-center my-5"
        >
          Join the ITMT Meme Club and let’s turn back time to the good vibes
          while cashing in!
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="title-text text-stroke-xs text-4xl md:text-3xl max-w-5xl text-white font-bold text-center"
        >
          Follow us for updates so good, they'll make your clock spin!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          div
          className="flex flex-wrap items-center justify-between  gap-2 px-7 mt-5 w-full"
        >
          <Button
            label="FOLLOW US"
            variant="text-xl py-3 px-9 border"
            isLink={true}
            link="https://medium.com/@in_the_meme_time1/unleashing-the-power-of-itmt-a-vision-for-the-future-of-crypto-0947dac0051a"
          ></Button>
          <div className="flex flex-wrap items-center justify-center gap-7 py-12">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-2xl text-yellow-500 underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
