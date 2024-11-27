import { blogList } from "@/db/blogs";
import { NavArrowLeft } from "iconoir-react";
import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";

const Blogs: FC = () => {
  return (
    <>
      <Head>
        <title>Blogs | Ajo Alex | React Native Engineer</title>
      </Head>
      <div className="container lg:w-2/3 mx-auto py-20 text-lg font-semibold font-SourGummy">
        <div>
          <Link href={"/"}>
            <div className="text-3xl font-semibold mb-8 flex items-center">
              <NavArrowLeft /> Blogs
            </div>
          </Link>
          {blogList.map((obj, index) => {
            return (
              <div key={index} className="my-6">
                <a href={obj.url}>
                  <div>{obj.name}</div>
                  <div className="text-slate-600 text-xs">
                    {obj.time} . {obj.date}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
