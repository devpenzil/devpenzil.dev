import React from "react";

function WorkExperience() {
  const experienceData = [
    {
      company: "PIT Solutions",
      from: "Jan 2024",
      to: "Present",
    },

    {
      company: "Neoito",
      from: "Aug 2022",
      to: "Jan 2024",
    },
  ];
  return (
    <div className="mt-6 text-lg">
      <div className="text-3xl font-semibold">Work Experience</div>
      <div className="mt-3">
        Here&apos;s a brief rundown of my most recent experiences.
      </div>
      <div>
        {experienceData.map((obj) => {
          return (
            <div
              className="mt-2 flex flex-row justify-between"
              key={obj.company}
            >
              <div className="font-semibold">{obj.company}</div>
              <div>
                {obj.from} - {obj.to}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-8">
        <a href="#">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            View my Resume
          </div>
        </a>
      </div>
    </div>
  );
}

export default WorkExperience;
