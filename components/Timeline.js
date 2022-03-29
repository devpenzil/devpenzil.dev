import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function Timeline({data}) {

  const [height, setHeight] = useState(200);
  return (
    <div className="container md:w-2/3 mx-auto py-6 px-4">
      <div className="text-3xl font-semibold">Timelines </div>
      <div style={{ height: height, overflow: "hidden" }} className="mb-8 transition duration-500">
        {data.map((obj, i) => {
          return (
            <div key={i} className="py-4 text-lg">
              <div>
                {" "}
                <span className="text-purple-800 dark:text-green-500">{obj.date}</span> - {obj.event}
              </div>
              <div className="text-sm text-gray-600">{obj.description}</div>
            </div>
          );
        })}
      </div>
      <PrimaryButton trigger={()=>{
          height === 200 && setHeight('auto')
          height === 'auto' && setHeight(200)
      }} label={height === 200 ? 'Read More': 'Read Less'} />
        
    </div>
  );
}

export default Timeline;
