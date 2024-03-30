import { experience } from "@/db/experience";
import React, { useId } from "react";

function Experience() {
  const key = useId();
  return (
    <div className="w-2/3 mx-auto py-24">
      <div className="text-6xl font-semibold mb-10">Experience</div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experience.map((obj) => {
          return (
            <li className="mb-10 ms-4" key={key}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {obj.period}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 ">
                {obj.company_name}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {obj.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Experience;
