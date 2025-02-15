import React from "react";
import Header from "./components/header";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import HowToBuy from "./view/HowToBuy";
import VibingTogether from "./view/VibingTogether";
import Introducing from "./view/Introducing";
import WhatIsClocking from "./view/WhatIsClocking";
import TimeMap from "./view/TimeMap";

const App = () => {
  return (
    <main className="w-full overflow-hidden bg-[rgb(228, 50, 1)]">
      <Header />
      <Hero />
      <About />
      <Introducing />
      <WhatIsClocking />
      <HowToBuy />
      <Tokenomics />
      <TimeMap />
      {/* <VibingTogether /> */}
      <Contact />
    </main>
  );
};

export default App;
