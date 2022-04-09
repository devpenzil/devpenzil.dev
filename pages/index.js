import React, { useEffect, useState } from "react";
import HeadSection from "../components/HeadSection";
import HeroSpotlight from "../components/HeroSpotlight";
import HomeBlogPreview from "../components/HomeBlogPreview";
import { THREEBLOGDETAILS } from "../queries/queries";
import CodingSetup from "../components/CodingSetup";
import { graphcms } from "../graphcms/config";

export async function getStaticProps() {
  const { blogs } = await graphcms.request(THREEBLOGDETAILS);
  return {
    props: {
      blogs,
    },
  };
}
function Index({ blogs }) {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title="Devpenzil | Home" />
      <HeroSpotlight />
      <HomeBlogPreview data={blogs[0]} />
      <CodingSetup />
    </div>
  );
}

export default Index;
