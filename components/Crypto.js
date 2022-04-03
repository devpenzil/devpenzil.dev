import React from "react";
import Image from "next/image";
import CopyIcon from "../assets/svg/CopyIcon";
import RightArrow from "../assets/svg/RightArrow";
function Crypto({data}) {
  return (
    <div
      className="container md:w-2/3 mx-auto py-6 px-6 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 rounded-3xl"
      title="My crypto assets"
    >
      <div className="mx-auto w-full flex items-center justify-center flex-col mt-8 ">
        <Image
          src="/67946056.png"
          alt="image"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <div
          className=" overflow-hidden mt-3 text-slate-800 dark:text-white cursor-pointer active:text-gray-600 select-none flex flex-row"
          onClick={() =>
            navigator.clipboard.writeText(
              "0xB8706b5521a133023898401e70B7055208F15adF"
            )
          }
          title="click to copy"
        >
          <CopyIcon /> 0xB8706b5..
        </div>
      </div>
      <div>
        <div className="text-2xl  font-bold">Tokens in my collection</div>
        <div className="flex min-h-28 mt-2 flex-wrap">
          {data.map((obj,i)=>{
           return(
            <div key={i} className="w-28 ml-3 mt-2 h-28 bg-slate-200 p-3 rounded-lg flex flex-col justify-center items-center dark:bg-slate-700">
            <Image
          src={obj.image.url}
          alt="image"
          width={50}
          height={50}
          className="rounded-full mx-auto"
        />
        <span className="mt-1 text-xs font-semibold">{obj.name}</span>
          </div>
           )
          })}
        </div>
      </div>
      <div className="text-2xl font-bold hover:text-slate-500 mt-10 ">
        <a href="https://opensea.io/collection/untitled-collection-276211236" className="flex items-center">
          Checkout my NFT collection <RightArrow />
        </a>
      </div>
    </div>
  );
}

export default Crypto;
