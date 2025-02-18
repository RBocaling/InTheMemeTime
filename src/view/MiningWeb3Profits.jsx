import React from "react";
import { motion } from "framer-motion";

const MiningWeb3Profits = () => {
  return (
    <div className=" text-white py-16 px-6 font-bold text-shadow-md">
      {/* Mining Protocols Section */}
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="title-text text-stroke-md text-3xl md:text-6xl mb-4 text-yellow-500 font-bold whitespace-nowrap md:leading-[12rem]"
        >
          Mining Protocols
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="title-text text-stroke-sm text-xl md:text-4xl text-white font-bold mb-9"
        >
          Hashpower-based mining operations contributing to ecosystem growth.
        </motion.p>
        <div className="bg-black p-6 inline-block rounded-lg border-4 border-yellow-400">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-sm text-xl md:text-2xl text-white font-bold"
          >
            Profit = Hashpower × Mining Efficiency × Market Rate
          </motion.p>
        </div>
        <div className="mt-6 text-2xl">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-xs text-xl md:text-4xl text-white font-bold mb-9"
          >
            <span className="font-bold text-yellow-300">80%</span> to
            Development
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-xs text-xl md:text-4xl text-white font-bold mb-9"
          >
            <span className="font-bold text-yellow-300">20%</span> to Buybacks
          </motion.p>
        </div>
      </section>

      {/* Web3 Profits Section */}
      <section className="relative container mx-auto text-center">
        <h1 className="title-text text-stroke-md text-3xl md:text-6xl mb-4 text-yellow-500 font-bold whitespace-nowrap md:leading-[12rem]">
          {" "}
          Web3 Profits
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="title-text text-stroke-sm text-xl md:text-4xl text-white font-bold mb-9"
        >
          Profits generated through swaps and decentralized transactions.
        </motion.p>
        <div className="mt-6 text-2xl">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-xs text-xl md:text-3xl text-white font-bold mb-9"
          >
            <span className="font-bold text-yellow-300">33.3%</span> Ticktok
            Swap Buyback from Fees
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="title-text text-stroke-xs text-xl md:text-3xl text-white font-bold mb-9"
          >
            <span className="font-bold text-yellow-300">80%</span> to
            Development | <span className="font-bold text-yellow-300">20%</span>{" "}
            to Buybacks
          </motion.p>
        </div>
        <img
          src="/img2/Money.avif"
          className="absolute top-0 left-0 w-[300px] -z-10 opacity-35"
          alt=""
        />
      </section>
    </div>
  );
};

export default MiningWeb3Profits;
