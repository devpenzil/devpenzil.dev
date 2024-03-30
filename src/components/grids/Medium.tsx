/* eslint-disable @next/next/no-img-element */
import React from "react";

function Medium() {
  return (
    <div className="shadow-xl p-4 border rounded-2xl h-14 items-center flex flex-row text-gray-600 bg-white gap-2 text-sm truncate">
      <img
        src="/medium.svg"
        alt=""
        className="w-7 h-7 bg-white p-1 rounded-lg"
      />
      <a href=" https://medium.com/@devpenzil">https://medium.com/@devpenzil</a>
    </div>
  );
}

export default Medium;
