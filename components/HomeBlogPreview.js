import React from "react";
import Link from "next/link";
function HomeBlogPreview({ data }) {
  
  return (
    <section className="py-6">
      <div className="container md:w-2/3 mx-auto p-2">
        <div className="text-4xl font-semibold mb-6">Featured Blog</div>
        <div className="container ">
          <a
            href={data?.url}
            target={"_blank"}
            rel="noreferrer"  
            className="cursor-pointer "
          >
            <Link href={`/blog/${data?.slug}`} passHref>
              <article>
                <div className="w-full">
                  <div
                    className="w-full h-[500px] rounded-xl hover:opacity-80 bg-cover bg-center border-2 bg-gray-300"
                    style={{
                      backgroundImage: `url(${data?.coverImage?.url})`,
                    }}
                  ></div>
                  <div className="mt-2 text-3xl font-semibold">{data?.name}</div>
                </div>
              </article>
            </Link>
          </a>
        </div>
        <div className="py-8">
          <span className="bg-gray-900 dark:bg-slate-50 dark:text-slate-800 text-xl text-white px-8 py-4 rounded-full hover:ring-4 ring-gray-800  ring-offset-4 transition duration-500">
            <Link href={"/blogs"}>Read all blog</Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HomeBlogPreview;
