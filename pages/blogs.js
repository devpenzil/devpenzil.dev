import React from "react";
import HeadSection from '../components/HeadSection'
import { BLOGSDETAILS } from '../queries/queries'
import { graphcms } from '../graphcms/config'
import Link from "next/link";
export async function getStaticProps() {
  const { blogs } = await graphcms.request(BLOGSDETAILS)
  return {
    props: {
      blogs
    },
  }
}
function Blogs({blogs}) {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50">
       <HeadSection title='Devpenzil | Blogs' />
        <div className="dark:bg-slate-800 dark:text-slate-50 w-full min-h-screen">
          <div className="container md:w-2/3 mx-auto p-2">
            <div className="text-4xl font-semibold">
              Blogs
            </div>
            <div className="container flex flex-row overflow-x-auto py-6 mt-8 flex-wrap justify-center">
              {blogs.map((obj, index) => {
                return (
                  // eslint-disable-next-line @next/next/link-passhref
                  <Link key={index} href={`/blog/${obj.slug}`}>
                    <article className="px-4 cursor-pointer">
                      <div className="w-80 mx-auto md:w-96">
                        <div
                          className="w-full h-80 rounded-xl hover:opacity-80 bg-cover bg-center border-2 bg-gray-300"
                          style={{
                            backgroundImage: `url(${obj.coverImage.url})`,
                          }}
                        ></div>
                        <div className="mt-2 text-2xl font-semibold">
                          {obj.name}
                        </div>
                        <div className="text-sm font-medium">
                          {obj.date}
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
