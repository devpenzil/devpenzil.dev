/* eslint-disable @next/next/no-img-element */
import React from "react";

function Services() {
  return (
    <div className="container mx-auto py-20" id="services">
      <div className="flex flex-row items-center gap-8">
        <div className="text-[46px] font-semibold">
          Services I provide <br /> that derive 99% result
        </div>
        <img src="/image/smile.svg" alt="" />
      </div>

      <div className="grid grid-cols-3 grid-rows-4  mt-10 border-black border-r-4 border-y-4 ">
        <div className="p-8">
          <div className="text-[48px] font-semibold">20+</div>
          <div className="text-2xl font-semibold">Projects</div>
        </div>
        <div className="row-span-3 col-start-1 row-start-2 p-8 border-t-4 border-black  ">
          <div className="text-[48px] font-semibold">100k+</div>
          <div className="text-2xl font-semibold">Generated</div>
        </div>
        <div className="row-span-2 col-start-2 row-start-1 p-8 border-x-4 border-b-4 border-black">
          <div>
            <img src="/image/smile.svg" alt="" />
            <div className="text-[36px] font-bold">User Research</div>
            <div className="text-2xl">
              Services we’re providing <br /> that derive 99% result
            </div>
          </div>
        </div>
        <div className="row-span-2 col-start-2 row-start-3 p-8 border-x-4 border-black">
          <div>
            <img src="/image/smile.svg" alt="" />
            <div className="text-[36px] font-bold">User Research</div>
            <div className="text-2xl">
              Services we’re providing <br /> that derive 99% result
            </div>
          </div>
        </div>
        <div className="row-span-2 col-start-3 row-start-1 p-8 border-b-4 border-black">
          <div>
            <img src="/image/smile.svg" alt="" />
            <div className="text-[36px] font-bold">User Research</div>
            <div className="text-2xl">
              Services we’re providing <br /> that derive 99% result
            </div>
          </div>
        </div>
        <div className="row-span-3 col-start-3 row-start-3 p-8">
          <div>
            <img src="/image/smile.svg" alt="" />
            <div className="text-[36px] font-bold">User Research</div>
            <div className="text-2xl">
              Services we’re providing <br /> that derive 99% result
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
