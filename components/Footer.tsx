import React from "react";
import Spacer from "./Spacer";
import Link from "next/link";

function Footer() {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-5 gap-4">
        <div>
          <div className=" font-semibold uppercase">General</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Project </Link>
            <Link href={"/"}>Blog</Link>
          </div>
        </div>
        <div>
          <div className=" font-semibold uppercase">Specifics</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/"}>Stats</Link>
            <Link href={"/"}>Toolbox </Link>
            <Link href={"/"}>Snippet</Link>
          </div>
        </div>
        <div>
          <div className=" font-semibold uppercase"> Extra</div>
          <div className="text-slate-500 gap-2 mt-4 font-semibold flex flex-col">
            <Link href={"/"}>Resume</Link>
            <Link href={"/"}>Sponsor</Link>
          </div>
        </div>
        <div className="col-span-2">vbjhb</div>
      </div>
      <Spacer gap="h-20" />
      <div className="text-center text-xs font-semibold">Ajo Alex @ 2024</div>
    </div>
  );
}

export default Footer;
