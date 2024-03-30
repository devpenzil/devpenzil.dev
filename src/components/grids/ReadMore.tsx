import Link from "next/link";
import React from "react";

function ReadMore() {
  return (
    <Link href={"/blogs"}>
      <div className="h-36 shadow-lg border rounded-2xl flex justify-center items-center ">
       <img src="/right.svg" alt=""  className="w-[50px] h-[50px]" />
      </div>
    </Link>
  );
}

export default ReadMore;
