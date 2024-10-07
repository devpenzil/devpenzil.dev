import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import { blogs } from "@/db/blogs";
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
        {blogs.map((obj, index) => {
          return (
            <a href={obj.link} key={index}>
              <div className="w-full">
                <div
                  className={`h-80 bg-[url('https://images.pexels.com/photos/28350926/pexels-photo-28350926/free-photo-of-a-computer-desk-with-a-monitor-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] rounded-md`}
                ></div>
                <div className="text-2xl  font-semibold">{obj.name}</div>
                <div className="text-xs text-slate-600  font-semibold">
                  {obj.date} . {obj.read_time}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
