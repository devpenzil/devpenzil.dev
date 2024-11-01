/* eslint-disable @next/next/no-img-element */
import React from "react";

function Blogs() {
  return (
    <div className="container mx-auto py-20" id="blogs">
      <div className="flex flex-row ">
        <div className="text-[46px] font-semibold mr-10">
          I love to share my knowledge <br /> through writing.
        </div>
        <img src="/image/new.svg" alt="" />
      </div>
      <div className="grid grid-cols-3 mt-10 gap-10">
        {[1, 2, 3].map((item) => (
          <div
            className="aspect-square bg-white border-4 border-black p-10"
            key={item}
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-full h-2/3 object-cover border-black border-4 "
            />
            <div className="text-[36px] mt-4 font-bold">Test name</div>
            <div className="text-2xl font-semibold">
              shjgdhjsas jsadhgjas askjdhsa aksjhas aksjh
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
