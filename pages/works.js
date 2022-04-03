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
  const [image, SetImage] = useState(
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  return (
    <div className="w-full dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Projects" />
      <section className="mx-auto container md:w-2/3 w-full p-2">
        <div className="text-4xl font-semibold">Projects</div>
        <div className="w-full flex flex-row mt-5 space-x-4">
          <div className="md:w-1/2 w-full">
            {projects.map((obj, index) => {
              return (
                <a
                  href={obj.repourl}
                  key={index}
                  target="_blank"
                  onMouseOver={() => {
                    SetImage(obj.coverimage.url);
                  }}
                  onMouseLeave={() => {
                    SetImage("https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
                  }}
                >
                  <div className="w-full bg-slate-100 py-6 px-4 rounded-md mt-5 cursor-pointer hover:ring-1 ring-slate-600 dark:bg-slate-900">
                    <div className="text-xl font-bold ">{obj.name}</div>
                    <div className="text-sm font-light">{obj.description}</div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="w-1/2 hidden sm:block">
            <div
              className="m-4 bg-slate-100 w-full h-96 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

{
  /* <div className="mt-8 flex flex-wrap justify-start">
          {projects.map((obj, index) => {
            return (
              <div className="w-full md:w-[48%] my-6 mx-auto" key={index}>
                <div>
                  <div
                    className="bg-gray-400 w-full mx-auto h-96 rounded-xl border-2 border-gray-400 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${obj.coverimage.url})`,
                    }}
                  ></div>
                  <div className="text-2xl mt-4 font-semibold flex">
                    {obj.name} <a href={obj.liveurl}> <LinkIcon /> </a>
                  </div>
                  <div>{obj.description}</div>
                </div>
              </div>
            );
          })}
        </div> */
}
