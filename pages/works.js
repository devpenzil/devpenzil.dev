import React from "react";
import HeadSection from "../components/HeadSection";
import { GETPROJECTS } from "../queries/queries";
import { graphcms } from "../graphcms/config";
import LinkIcon from "../assets/svg/LinkIcon";
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
    <div className="w-full min-h-screen dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Projects" />
      <section className="mx-auto container md:w-2/3 w-full p-2">
        <div className="text-4xl font-semibold">Projects</div>
        <div className="mt-8 flex flex-wrap justify-start">
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
        </div>
      </section>
    </div>
  );
}

export default Projects;
