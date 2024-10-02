/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import { software } from "@/db/software";
import React from "react";

function Toolbox() {
  return (
    <div className="container mx-auto w-2/3">
      <Spacer gap="h-10" />
      <PageHeader heading="Here's what I use daily." label="TOOLBOX" />
      <Spacer gap="h-20" />
      <div className="text-2xl font-semibold mb-2">Softwares</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {software.map((obj) => {
          return (
            <a href={obj.url} key={obj.name}>
              <div className=" w-32 h-32 bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 shadow-slate-200 rounded-md flex justify-center items-center group">
                <img
                  src={`/ico/${obj.image}`}
                  className="w-16 h-16 group-hover:mb-3 transitio duration-150"
                  alt={obj.name}
                />
              </div>
            </a>
          );
        })}
      </div>
      <Spacer gap="h-20" />
      <div className="text-2xl font-semibold mb-2">Tech Stack</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((obj) => {
          return (
            <a href="#" key={obj}>
              <div className=" w-32 h-32 bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 shadow-slate-200 rounded-md flex justify-center items-center group">
                <img
                  src="/icons/vscode.ico"
                  className="w-16 h-16 group-hover:mb-3 transition duration-150"
                  alt="icon"
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Toolbox;
