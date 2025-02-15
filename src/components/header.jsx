import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-5">
        <img src="/img2/hero.png" className="w-14" alt="" />
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white text-xl">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-5">
            {socials.slice(0, 2)?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="h-12 w-12 bg-dark-violet rounded-lg flex items-center justify-center"
              >
                <img src={item.img} className="w-[2rem]" alt="" />
              </a>
            ))}
          </div>
          <Button label="Buy Now" variant="text-xl py-2 px-9 border" />
        </div>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-yellow-500 " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-black  z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all">
          <h1 className="title-text text-stroke-sm mb-12 text-3xl md:text-12xl text-yellow-500 font-bold md:leading-[12rem]">
            InTheMemeTime
          </h1>

          <ul className="flex flex-col items-center justify-center gap-9">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a href={item.url} className=" text-white text-4xl font-medium">
                  {item.label}
                </a>
              </li>
            ))}
            <Button label="Buy Now" variant="text-xl py-2 px-9 border" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
