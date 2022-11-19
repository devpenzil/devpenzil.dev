import React from "react";
import ReactMarkdown from "react-markdown";

function AboutNote({ data }: any) {
  return (
    <div className="py-6 text-base text-justify leading-loose markdown">
      <ReactMarkdown>{data.markdown}</ReactMarkdown>
    </div>
  );
}

export default AboutNote;
