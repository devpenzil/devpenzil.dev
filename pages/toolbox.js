import React, { useEffect, useState } from "react";
import { editor, hardware } from "../components/tools";
import ToolLink from "../components/ToolLink";
import HeadSection from "../components/HeadSection";
import { FETCHHARDWARE } from "../queries/queries";
import { graphcms } from "../graphcms/config";
export async function getStaticProps() {
  const { tools } = await graphcms.request(FETCHHARDWARE);
  return {
    props: {
      tools,
    },
  };
}
function Toolbox({ tools }) {
  return (
    <>
      <HeadSection title="Devpenzil | Toolbox" />
      <div className="w-full min-h-screen dark:bg-slate-800">
        <div className="container md:w-2/3 mx-auto py-6 px-2">
          <div className="text-4xl font-semibold">
            Here&#39;s what I use on the daily.
          </div>

          <div>
            <div className="text-2xl font-bold mt-8 dark:text-slate-50">Hardware</div>
            {tools &&
              tools
                .filter((tool) => tool.category === "hardware")
                .map((obj, i) => {
                  return (
                    <div key={i}>
                      <ToolLink
                        desc={obj.description}
                        link={obj.link}
                        name={obj.name}
                      />
                    </div>
                  );
                })}
          </div>
          <div>
            <div className="text-2xl font-bold mt-8 dark:text-slate-50">Apps & Tools</div>
            {tools &&
              tools
                .filter((tool) => tool.category === "apps")
                .map((obj, i) => {
                  return (
                    <div key={i}>
                      <ToolLink
                        desc={obj.description}
                        link={obj.link}
                        name={obj.name}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Toolbox;
