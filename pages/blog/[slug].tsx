import React from "react";
import { graphcms } from "../../graphcms/config";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header/Header";

export async function getStaticProps({ params }: any) {
  const { blog } = await graphcms.request(
    `
      query ProductPageQuery($slug: String!) {
        blog(where: {slug: $slug}) {
          content {
            markdown
          },
          name,
          coverImage{
            url
          },
          date,
          likes
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const { blogs } = await graphcms.request(`
      {
        blogs(orderBy: id_ASC) {
          slug
        }
      }
    `);

  return {
    paths: blogs.map(({ slug }: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function Blog({ blog }: any) {
  return (
    <>
      <Header page={blog ? blog.name : "blog"} />
      <div className="container md:w-2/3 lg:1/2 mx-auto py-16 markdown">
        <div
          className="w-full h-[400px] bg-slate-300 bg-cover bg-center mb-4 rounded-xl"
          style={{
            backgroundImage: `url(${blog.coverImage.url})`,
          }}
        />
        <div className="text-4xl font-semibold py-4">{blog.name}</div>
        <ReactMarkdown>{blog.content.markdown}</ReactMarkdown>
      </div>
    </>
  );
}

export default Blog;
