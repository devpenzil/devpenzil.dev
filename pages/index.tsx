import React from "react";
import Link from "next/link";
import { Package, Github, Pen } from "../public/icons";
import Header from "../components/header/Header";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Header page="Home" />
      <div className=" h-screen flex flex-col justify-center items-center p-4">
        <motion.div
          className="lg:text-8xl text-center text-5xl font-bold"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
          }}
        >
          Hey, I am Ajo
        </motion.div>
        <motion.div
          className="lg:text-8xl text-center text-5xl font-bold mt-6"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            delay: 0.05,
          }}
        >
          a developer
        </motion.div>
        <motion.div
          className="mt-10 text-gray-600 text-lg text-center "
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            delay: 0.1,
          }}
        >
          I am a 21 year old Mobile engineer & UI developer
        </motion.div>
        <div className="mt-6 flex md:space-x-6 flex-col md:flex-row items-center space-y-3 md:space-y-0">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 0.15,
            }}
          >
            <Link
              href="/blogs"
              className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
            >
              <Pen />
              <span>Blogs</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
          >
            <Link
              href="/projects"
              className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
            >
              <Package />
              <span>Projects</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 0.25,
            }}
          >
            {" "}
            <Link
              href="/about"
              className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
            >
              <Github />
              <span>About</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
