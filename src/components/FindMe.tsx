import React from "react";
import Twitter from "./grids/Twitter";
import Github from "./grids/Github";
import Linkedin from "./grids/Linkedin";
import Map from "./grids/Map";

function FindMe() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-8">
      <div className="col-span-2">
        <Linkedin />
      </div>
      <div className="row-span-2 col-start-4 row-start-1">
        <Twitter />
      </div>
      <div className="col-span-2 row-span-4 col-start-1 row-start-2">
        <div className="w-full h-full  bg-[url('/cover.jpeg')] bg-cover shadow-lg p-4 border rounded-2xl" />
         
      </div>
      <div className="row-span-2 col-start-4 row-start-3">
        <Github />
      </div>
      <div className="col-span-2 col-start-3 row-start-5">
        <Linkedin />
      </div>
      <div className="row-span-4 col-start-3 row-start-1">
        <Map />
      </div>
    </div>
  );
}

export default FindMe;
