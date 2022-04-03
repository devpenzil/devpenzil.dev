import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HeroSpotlight() {
  return (
    <section>
    <div className="container md:w-2/3 p-2 md:py-40 py-4 mx-auto flex md:flex-row flex-col-reverse justify-between items-center">
      <div className="text-center md:text-left md:text-5xl text-lg font-semibold w-full  md:leading-relaxed">
        I&#39;m <span className='text-pink-400'>Ajo Alex</span>. I&#39;m a Front End Developer, working at{" "}
        <a href="https://www.neoito.com/" target={"_blank"} rel="noreferrer" className="text-gray-500 underline  hover:text-gray-900 transition duration-300">
          Neoito
        </a>{" "}.
        <div className="text-xl md:space-x-6 mt-6 flex flex-col md:flex-row">
          <span className="bg-gray-900 text-white px-8 py-4 w-full md:w-auto mt-2 rounded-full hover:ring-4 ring-gray-800 ring-offset-4 transition duration-500">
            <Link href={"/blogs"}>Read the blog</Link>
          </span>
          <span className="bg-gray-200 text-gray-900 px-8 py-4 w-full md:w-auto mt-2 rounded-full hover:ring-4 ring-gray-600 ring-offset-4  transition duration-500">
            <Link href={"./about"}>More about me</Link>
          </span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSpotlight