import React from "react";
import ReactMarkdown from "react-markdown";
function Aboutme({ data, image }) {
  return (
    <div className="container md:w-2/3 mx-auto py-6 px-4 text-lg leading-loose ">
      <div
        className="w-60 h-60 bg-orange-400 float-left mr-8 mb-8 hidden lg:block rounded-lg bg-cover bg-no-repeat mt-4"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="markdown">
        <ReactMarkdown>{data.markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Aboutme;
