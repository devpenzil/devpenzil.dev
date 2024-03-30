import React from "react";
import Skills from "./grids/Skills";
import ToolBox from "./grids/ToolBox";
import Experiance from "./grids/Experiance";
import Ride from "./grids/Ride";
import About from "./grids/About";

function AboutMe() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      <div>
        <Experiance />
      </div>
      <div className="col-start-1 row-start-2">
        <ToolBox />
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-1">
        <About />
      </div>
      <div className="row-span-2 col-start-4 row-start-1">
        <Ride />
      </div>
    </div>
  );
}

export default AboutMe;
