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
        <div className="text-4xl font-semibold">Products</div>

        <div className=" w-full flex my-6 flex-wrap">
          {projects
            .filter((project) => project.type === "tool")
            .map((obj, index) => {
              return (
                <div className="relative w-60 h-72 group">
                  <div className="absolute z-50">
                    <a href={obj.liveurl}>
                      <div
                        title={obj.name}
                        className="w-60 h-72  bg-white hover:hidden group-hover:hidden shadow-2xl rounded-lg m-4 p-6 bg-origin-content hover:scale-110 transition duration-300"
                      >
                        <div
                          className="h-40 w-full bg-contain bg-center bg-no-repeat "
                          style={{
                            backgroundImage: `url(${obj.coverimage.url})`,
                          }}
                        ></div>
                        <div className="overflow-hidden">
                          <div className="text-xl font-semibold text-center mt-4">
                            {obj.name}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href={obj.liveurl}>
                    <div className="absolute z-0">
                      <div className="w-60 h-72 bg-white  shadow-2xl rounded-lg m-4 p-6 bg-origin-content hover:scale-110 transition duration-300 flex justify-center items-center text-center font-semibold">
                        {obj.description}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </section>
      <section className="mx-auto container md:w-2/3 w-full p-2">
        <div className="text-4xl font-semibold">Works</div>
        <div className="w-full flex flex-row mt-5 space-x-4 overflow-y-scroll no-scrollbar p-1">
          <div className="md:w-1/2 w-full h-96">
            {projects
              .filter((project) => project.type === "work")
              .map((obj, index) => {
                return (
                  <>
                    <a
                      href={obj.repourl}
                      key={index}
                      target="_blank"
                      onMouseOver={() => {
                        SetImage(obj.coverimage.url);
                      }}
                      onMouseLeave={() => {
                        SetImage(
                          "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        );
                      }}
                    >
                      <div className="w-full bg-slate-100 py-6 px-4 rounded-md mt-5 cursor-pointer hover:ring-1 ring-slate-600 dark:bg-slate-900">
                        <div className="text-xl font-bold ">{obj.name}</div>
                        <div className="text-sm font-light">
                          {obj.description}
                        </div>
                      </div>
                    </a>
                  </>
                );
              })}
          </div>
          <div className="w-1/2 hidden sm:block sticky top-0">
            <div
              className="m-4 bg-slate-100 w-full h-96 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto container md:w-2/3 w-full p-2">
        <div className="text-4xl font-semibold">Contributions</div>

        <div className=" w-full flex my-6 flex-wrap">
          {projects
            .filter((project) => project.type === "contribution")
            .map((obj, index) => {
              return (
                <>
                  <a href={obj.liveurl}>
                    <div
                      className="w-40 h-40 bg-contain bg-center bg-no-repeat shadow-2xl rounded-lg m-4 p-6 bg-origin-content hover:scale-110 transition duration-300"
                      style={{
                        backgroundImage: `url(${obj.coverimage.url})`,
                      }}
                    ></div>
                  </a>
                </>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
