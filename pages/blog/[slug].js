import React from "react";
import { graphcms } from "../../graphcms/config";
import ReactMarkdown from "react-markdown";
import HeadSection from "../../components/HeadSection";
export async function getStaticProps({ params }) {
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
    paths: blogs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function Blog({ blog }) {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50">
    <HeadSection title={blog ? blog.name: 'blog'} />
      <div className="container mx-auto md:w-2/3 w-full p-2 dark:bg-slate-800">
        <div className="h-10" />
        <div
          className="w-full h-[600px] bg-slate-300 bg-cover mb-4 rounded-xl border-2"
          style={{
            backgroundImage: `url(${blog.coverImage.url})`,
          }}
        />
        <div className="text-5xl font-semibold">{blog.name}</div>
        <div className="py-4">
          <div className="markdown">
          <ReactMarkdown>{blog.content.markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
