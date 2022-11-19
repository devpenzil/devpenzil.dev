import React from "react";
import Header from "../components/header/Header";
import { graphcms } from "../graphcms/config";
import { BLOGSDETAILS } from "../queries/query";
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
  console.log(blogs);
  return (
    <>
      <Header page="Blogs" />
      <div className="container mx-auto pt-12 w-2/3">{blogs[0]?.date}</div>
    </>
  );
}

export default Blog;
