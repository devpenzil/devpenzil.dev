import { projectList } from "@/db/projects";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Ajo Alex | React Native Engineer</title>
      </Head>
      <div className="container lg:w-2/3 mx-auto py-20 text-lg font-semibold font-SourGummy">
        <div>
          <Link href={"/"}>
            <div className="text-3xl font-semibold mb-8 flex items-center">
              <img src="/icons/back.svg" alt="" className="w-8 h-8" /> Projects
            </div>
          </Link>
          <div>
            {projectList.map((obj, index) => {
              return (
                <>
                  <a href={obj.url} key={index} target="_blank">
                    <div className="text-lg">{obj.name}</div>
                    <div className="text-sm text-slate-300 font-semibold">
                      {obj.desc}
                    </div>
                  </a>
                  <div className="h-3" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
