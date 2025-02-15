import React from "react";
import { motion } from "framer-motion";

const VibingTogether = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5 py-20">
        <h1 className="title-text text-stroke-md text-5xl md:text-8xl text-yellow-500 font-bold mt-9 whitespace-nowrap">
          VIBING TOGETHER
        </h1>
        <div class="w-full py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div class="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col shadow-lg">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/img/img-main.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Rides
                </h3>
              </a>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 ">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="/img/splash.png"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Foodtrip
                </h3>
              </a>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/img/img1.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Playful
                  </h3>
                </a>
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/img/hero-bg.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Wines
                  </h3>
                </a>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/img/img3.jpg "
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Roam
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibingTogether;
