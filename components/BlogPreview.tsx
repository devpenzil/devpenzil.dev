import { blogs } from "@/db/blogs";
import Link from "next/link";

function BlogPreview() {
  return (
    <div>
      <div className="text-3xl font-semibold">
        I love to share my knowledge through writing.
      </div>
      <div className="text-sm mt-4">
        Check out a few of my most recent publishing.
      </div>
      <div className="flex flex-row gap-3 mt-4">
        {blogs.slice(0, 3).map((obj, index) => {
          return (
            <a href={obj.link} key={index} className="w-1/3">
              <div className="w-full">
                <div
                  className={`h-80 bg-[url('https://images.pexels.com/photos/28350926/pexels-photo-28350926/free-photo-of-a-computer-desk-with-a-monitor-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover rounded-md`}
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
