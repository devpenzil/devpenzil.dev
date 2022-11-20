import React from "react";
import Link from "next/link";
import { Package, Github, Pen } from "../public/icons";
import Header from "../components/header/Header";

function Home() {
  return (
    <>
      <Header page="Home" />
      <div className=" h-screen flex flex-col justify-center items-center p-4">
        <div className="lg:text-8xl text-center text-5xl font-bold">
          Hey, I am Ajo
        </div>
        <div className="lg:text-8xl text-center text-5xl font-bold mt-6">
          a developer
        </div>
        <div className="mt-10 opacity-60 text-lg text-center ">
          I am a 21 year old Mobile engineer & UI developer
        </div>
        <div className="mt-6 flex md:space-x-6 flex-col md:flex-row items-center space-y-3 md:space-y-0">
          <Link
            href="/blogs"
            className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
          >
            <Pen />
            <span>Blogs</span>
          </Link>
          <Link
            href="/projects"
            className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
          >
            <Package />
            <span>Projects</span>
          </Link>
          <Link
            href="/"
            className="border-2 border-gray-400 rounded-md px-8 py-2 text-gray-500 flex space-x-2 items-center"
          >
            <Github />
            <span>Github</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
