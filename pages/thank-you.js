import React, { useEffect } from "react";
import HeadSection from "../components/HeadSection";
import Lottie from "lottie-web";
import confetti from "../assets/animation/confetti.json";
function ThankYou() {
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      wrapper: document.getElementById("animconatiner"),
      animType: "svg",
      loop: true,
      autoplay: true,
      animationData: confetti,
    });
    animation.play();
  }, []);
  return (
    <div className="w-full dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Thank You" />

      <section
        id="animconatiner"
        className="mx-auto container h-[300px] md:h-[500px] md:w-2/3 w-full p-2 flex flex-col items-center justify-center text-3xl md:text-9xl text-center font-semibold"
      >
        <div>
          Thanks for <span className="text-emerald-400">your</span> support
        </div>
      </section>
    </div>
  );
}

export default ThankYou;
