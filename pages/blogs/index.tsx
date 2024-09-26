import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import React from "react";

function Blogs() {
  return (
    <div className="container mx-auto w-2/3">
      <Spacer gap="h-20" />
      <PageHeader
        label="MY BLOG"
        heading="Insightful and helpful content curated for you."
      />
      <Spacer gap="h-20" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((obj) => {
          return (
            <div key={obj} className="w-full">
              <div className=" h-80 bg-teal-500 rounded-md"></div>
              <div className="text-2xl  font-semibold">Lorem Ipsum</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
