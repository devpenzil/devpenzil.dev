import React from "react";

function About() {
  return (
    <div className="w-full" id="about">
      <div className="container mx-auto text-white py-20 flex justify-around items-center">
        <div className="w-2/3">
          <div className="text-4xl font-bold">
            I help people and companies achieve their goals by designing &
            building user-friendly websites and interactive experiences.
          </div>
          <div className="w-1/2 font-semibold mt-7">
            I have a fondness for clean designs, subtle interactions and
            delightful user experiences. If you are interested you can check out
            some of work on Dribbble or Behance.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
