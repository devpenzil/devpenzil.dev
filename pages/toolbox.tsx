import React from "react";
import Header from "../components/header/Header";
import { graphcms } from "../graphcms/config";
import { Externalink } from "../public/icons";
import { FETCHHARDWARE } from "../queries/query";
export async function getStaticProps() {
  const { tools } = await graphcms.request(FETCHHARDWARE);
  return {
    props: {
      tools,
    },
  };
}
interface Tools {
  tools: {
    name: string;
    link: string;
    description: string;
    category: string;
  }[];
}
function toolbox({ tools }: Tools) {
  console.log(tools);
  return (
    <>
      <Header page="ToolBox" />
      <div className="container md:w-2/3 lg:1/2  mx-auto py-16 ">
        <div className="text-2xl font-semibold">Hardware</div>
        {tools
          .filter((tool) => tool.category === "hardware")
          .map((obj, index) => {
            return (
              <div
                key={index}
                className="w-full p-4 mt-4 rounded border flex justify-between items-center "
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-base font-bold">{obj.name}</div>
                    <div className="text-sm">{obj.description}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <a href={obj.link}>
                    <div className="border p-2 rounded">
                      <Externalink />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}

        <div className="text-2xl font-semibold mt-6">Apps & tools</div>
        {tools
          .filter((tool) => tool.category === "apps")
          .map((obj, index) => {
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
                  <a href={obj.link}>
                    <div className="border p-2 rounded">
                      <Externalink />
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

export default toolbox;
