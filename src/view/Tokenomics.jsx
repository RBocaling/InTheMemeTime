import React from "react";
import { tokenomics } from "../constant";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-5 md:gap-9 px-7">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-2/5"
        >
          <img src="/img2/img2.jpg" className="w-full rounded-xl " alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-3/5 relative z-20"
        >
          {" "}
          <h1 className="title-text text-center mb-9 text-stroke-md text-6xl md:text-8xl text-yellow-500 font-bold md:leading-[12rem] relative z-20">
            TOKENOMICS
          </h1>
          <div className="relative  items-center justify-center gap-9 border-b pb-3 mb-3 z-30 w-full">
            {tokenomics.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3"
              >
                <h1 className="title-text text-stroke-sm text-3xl md:text-5xl text-yellow-400 font-bold">
                  {item.value}
                </h1>
                <h1 className="title-text text-stroke-sm text-2xl text-white font-bold">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
          <p className="text-white text-xl">
            ANY AND ALL FUNDS ARE SECURED IN A MULTISIG WALLET. DISPERSAL OF ANY
            TOKEN ALLOCATIONS EXCLUDING THAT OF BOTH THE TAP GAME & THE LP POOL
            RESERVES ARE STRICTLY SUBJECT TO A MANDATORY VESTING SCHEDULE
            CLAIMABLE EVERY 24HRS
          </p>
          <img
            src="/img2/clock.png"
            className="w-full absolute bottom-0 left-0 z-[-1] opacity-15"
            alt=""
          />
        </motion.div>
      </div>
      <img
        src="/img/Sprinkle.svg"
        className="w-full h-full absolute top-0 left-0 z-10 opacity-30"
        alt=""
      />
    </section>
  );
};

export default Tokenomics;
