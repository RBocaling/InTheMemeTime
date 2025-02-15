import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = ({ label, isYspace }) => {
  return (
    <section
      className={`w-full overflow-hidden bg-yellow-500  relative flex items-center py-4 border-y-2 rotate-1 ${
        isYspace && "-translate-y-0 md:-translate-y-16"
      }`}
    >
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <h1
            key={i}
            className="title-text text-stroke-sm text-4xl text-white  px-12 tracking-wider"
          >
            {label}
          </h1>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
