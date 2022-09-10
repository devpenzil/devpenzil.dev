import React, { useState } from "react";
import HeadSection from "../components/HeadSection";
import { GETPROJECTS } from "../queries/queries";
import { graphcms } from "../graphcms/config";
export async function getStaticProps() {
  const { projects } = await graphcms.request(GETPROJECTS);
  return {
    props: {
      projects,
    },
  };
}
function Projects({ projects }) {
  return (
    <div className="w-full dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Projects" />
      <section className="mx-auto container md:w-2/3 w-full p-2">
        {/* <div className="text-4xl font-semibold">Works</div> */}
        <div className="w-full flex md:flex-row flex-col flex-wrap mt-5  overflow-y-scroll no-scrollbar">
          {projects
            .filter((project) => project.type === "tool")
            .map((obj, index) => {
              return (
                <>
                  <div
                    className="md:w-1/2 w-full pr-4 mt-4 cursor-pointer"
                    onClick={() => {
                      window.open(obj.liveurl);
                    }}
                  >
                    <div
                      className=" bg-slate-100 w-full h-96 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${obj.coverimage.url})`,
                      }}
                    />
                  </div>
                </>
              );
            })}
          {projects
            .filter((project) => project.type === "work")
            .map((obj, index) => {
              return (
                <>
                  <div
                    className="md:w-1/2 w-full pr-4 mt-4 cursor-pointer"
                    onClick={() => {
                      window.open(obj.liveurl);
                    }}
                  >
                    <div
                      className=" bg-slate-100 w-full h-96 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${obj.coverimage.url})`,
                      }}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
