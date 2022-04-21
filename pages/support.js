import React from "react";
import HeadSection from "../components/HeadSection";
import RightArrow from "../assets/svg/RightArrow";

function Support() {
  return (
    <div className="w-full dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Support" />
      <section className="mx-auto container md:w-2/3 w-full p-2 flex flex-col items-center">
        <div className="md:text-9xl text-3xl text-center font-semibold">
          A <span className="text-emerald-300">supporter</span> can do many
          things
        </div>
        <div className="w-full md:flex  justify-start items-center mt-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="money-bag w-96 h-96  bg-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 text-lg px-16 md:px-2">
            <div className="text-2xl font-bold">Do you like my works ?</div>
            <p>
              If you want to support me. You can buy my supporter badge{" "}
              <b>nft</b> from <b>opensea</b>. Its nearly costs only 10 Dollars.
            </p>
            <ul className="list-disc mt-4 list-inside">
              <li>You get a devpenzil supporter badge</li>
              <li>You are supporting me with next generation way</li>
            </ul>
            <div className="mt-6 text-teal-600 hover:underline underline-offset-2 decoration-dashed">
              <a
                href="https://opensea.io/collection/support-for-devpenzil"
                className="flex items-center"
              >
                Be my supporter <RightArrow stroke="#14b8a6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
