/* eslint-disable @next/next/no-img-element */
import { devArticlesType } from "@/types/service";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function BlogPreview() {
  const [blogs, setBlogs] = useState<devArticlesType>();
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=devpenzil")
      .then((response) => {
        setBlogs(response.data);
      });
  }, []);
  return (
    <div className="py-10">
      <div className="text-3xl font-semibold">
        I love to share my knowledge through writing.
      </div>
      <div className="text-sm mt-4">
        Check out a few of my most recent publishing.
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {blogs?.slice(0, 3).map((obj, index) => {
          return (
            <a href={obj?.url} key={index} className="sm:w-full md:w-1/3">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src={obj?.cover_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-20">{obj?.title}</h2>
                  <p>
                    {obj?.readable_publish_date} . {obj?.reading_time_minutes}{" "}
                    Min Read
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex mt-8">
        <Link href="/blogs">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            Read my Blogs
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogPreview;
