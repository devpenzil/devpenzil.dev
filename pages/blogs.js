import React from "react";
import HeadSection from "../components/HeadSection";
import { BLOGSDETAILS } from "../queries/queries";
import { graphcms } from "../graphcms/config";
import Link from "next/link";
export async function getStaticProps() {
  const { blogs } = await graphcms.request(BLOGSDETAILS);
  return {
    props: {
      blogs,
    },
  };
}
function Blogs({ blogs }) {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Blogs" />
      <div className="dark:bg-slate-800 dark:text-slate-50 w-full">
        <div className="container md:w-2/3 mx-auto p-2">
          <div className="text-4xl font-semibold">Blogs</div>
          <div className="container flex flex-col overflow-x-auto py-6 mt-8  justify-center lg:justify-start lg:flex-row flex-wrap">
            {blogs.map((obj, index) => {
              return (
                <Link key={index} href={`/blog/${obj.slug}`}>
                  <article className="my-4 cursor-pointer flex lg:w-1/2 group">
                    <div>
                      <div
                        className="w-40 h-40 rounded-xl group-hover:opacity-80 bg-cover bg-center border-2 bg-gray-300 hidden md:block"
                        style={{
                          backgroundImage: `url(${obj.coverImage.url})`,
                        }}
                      ></div>
                    </div>
                    <div className="ml-8">
                      <div className="text-sm font-medium">
                        published on {obj.date}
                      </div>
                      <div className="mt-2 text-2xl font-semibold">
                        {obj.name}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
