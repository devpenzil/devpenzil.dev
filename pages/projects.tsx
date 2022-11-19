import React from "react";
import Header from "../components/header/Header";
import { graphcms } from "../graphcms/config";
import { Github, Home } from "../public/icons";
import { GETPROJECTS } from "../queries/query";
export async function getStaticProps() {
  const { projects } = await graphcms.request(GETPROJECTS);
  return {
    props: {
      projects,
    },
  };
}
interface Projects {
  projects: {
    description: string;
    liveurl: string;
    name: string;
    repourl: string;
    type: string;
    emoji: string;
  }[];
}
function Projects({ projects }: Projects) {
  return (
    <>
      <Header page="Projects" />
      <div className="container mx-auto pt-16 w-1/2">
        {projects.map((obj, index) => {
          return (
            <div
              key={index}
              className="w-full p-4 mt-4 rounded border flex justify-between items-center "
            >
              <div className="flex items-center space-x-4">
                <div>{obj.emoji}</div>
                <div>
                  <div className="text-base font-bold">{obj.name}</div>
                  <div className="text-sm">{obj.description}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <a href={obj.liveurl}>
                  <div className="border p-2 rounded">
                    <Home />
                  </div>
                </a>
                <a href={obj.repourl}>
                  <div className="border p-2 rounded">
                    <Github />
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
