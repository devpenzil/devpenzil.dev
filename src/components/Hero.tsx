import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="lg:h-[600px] h-[400px]  " id="hero">
      <div
        className="container mx-auto lg:text-7xl text-3xl font-bold h-full flex flex-col justify-center items-center"
        id="h1"
      >
        <motion.div
          className="my-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="outlineText">Hi, I&apos;m</span>{" "}
          <span className="text-white">Ajo</span>
          <span className="text-red-500">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-2 outlineText"
        >
          React Native Engineer
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-2"
        >
          <span className="outlineText">@</span>{" "}
          <span className="text-white">
            <a href="https://www.neoito.com/">Neoito</a>
          </span>{" "}
          <span className="text-red-500">.</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
