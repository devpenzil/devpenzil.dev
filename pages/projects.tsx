import { projectList } from "@/db/projects";
import { AppStore, GithubCircle, Google, NavArrowLeft } from "iconoir-react";
import Head from "next/head";
import Link from "next/link";

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
              <NavArrowLeft /> Projects
            </div>
          </Link>
          <div>
            {projectList.map((obj, index) => {
              return (
                <div key={index}>
                  <div className="text-lg">{obj.name}</div>
                  <div className="text-sm font-semibold">{obj.desc}</div>
                  <div className="flex gap-3 mt-2">
                    {obj.appStore && (
                      <a href={obj.appStore}>
                        <AppStore width={20} height={20} />
                      </a>
                    )}

                    {obj.playStore && (
                      <a href={obj.playStore}>
                        <Google width={20} height={20} />
                      </a>
                    )}

                    {obj.github && (
                      <a href={obj.github}>
                        <GithubCircle width={20} height={20} />
                      </a>
                    )}
                  </div>
                  <hr className="mt-3" />
                  <div className="h-3" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
