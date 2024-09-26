import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import React from "react";

function projects() {
  return (
    <div className="w-2/3 container mx-auto text-center font-semibold text-2xl">
      <Spacer gap={"h-20"} />
      <PageHeader
        heading="A selection of my favorite works."
        label="Projects"
      />
    </div>
  );
}

export default projects;
