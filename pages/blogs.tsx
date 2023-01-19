import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/header/Header";
import { graphcms } from "../graphcms/config";
import Calender from "../public/icons/Calender";
import { BLOGSDETAILS } from "../queries/query";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const { blogs } = await graphcms.request(BLOGSDETAILS);
  return {
    props: {
      blogs,
    },
  };
}
interface Blogs {
  blogs: {
    coverImage: {
      url: string;
    };
    date: string;
    id: string;
    name: string;
    slug: string;
  }[];
}
function Blog({ blogs }: Blogs) {
  return (
    <>
      <Header page="Blogs" />
      <div className="container md:w-2/3 lg:1/2 px-4 mx-auto py-16 ">
        {blogs.map((obj, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.05 * (index + 1),
              }}
            >
              <Link href={`/blog/${obj.slug}`}>
                <div className=" md:h-[300px] flex md:flex-row flex-col rounded-md overflow-hidden shadow-lg my-4 bg-white">
                  <div className="md:w-1/2 min-h-full">
                    <div
                      className="w-full h-[300px] bg-white rounded-md bg-cover bg-no-repeat bg-center "
                      style={{
                        backgroundImage: `url(${obj.coverImage.url})`,
                      }}
                    ></div>
                  </div>
                  <div className="p-6 flex flex-col justify-evenly md:w-1/2 min-h-full">
                    <div className="text-3xl font-bold">{obj.name}</div>
                    <div className="bg-blue-200 text-blue-800 w-fit px-4 py-1 rounded flex items-center space-x-3 mt-6">
                      <Calender /> <span>{obj.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
