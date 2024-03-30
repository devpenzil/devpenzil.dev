import Link from "next/link";
import React from "react";

function BlogCover() {
  return (
    <Link href={"/blogs"}>
      <div className="h-full shadow-lg border rounded-2xl flex justify-center items-center bg-[url('/blog-cover.jpg')] bg-cover bg-center relative">
        <div className="border rounded-full w-6 h-6 flex justify-center items-center absolute top-3 right-3 border-gray-700">
          <img src="/arrow.svg" alt="" className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export default BlogCover;
