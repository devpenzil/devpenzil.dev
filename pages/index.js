import React, { useEffect, useState } from "react";
import HeadSection from "../components/HeadSection";
import HeroSpotlight from "../components/HeroSpotlight";
import HomeBlogPreview from "../components/HomeBlogPreview";
import { THREEBLOGDETAILS } from "../queries/queries";
import CodingSetup from '../components/CodingSetup'
import { graphcms } from "../graphcms/config";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const { blogs } = await graphcms.request(THREEBLOGDETAILS);
  return {
    props: {
      blogs
    },
  };
}
function Index({blogs}) {
  // useEffect(()=>{
  //   const ChangeCount = async () => {
  //     const {stat}  = await graphcms.request(
  //       `mutation {
  //         updateStat(where: {id: "cl1ixdrp31f2d0cphdjl2mrfj"} data: {pagevisit: 22}) {
  //           pagevisit
  //         }
  //       }
  //       `
  //     );
  //     console.log(stat);
  //   }
  //   ChangeCount()
  // },[]);
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50">
      <HeadSection title='Devpenzil | Home' />
      <motion.div>
      <HeroSpotlight />
      </motion.div>
      <HomeBlogPreview data={blogs[0]} />
      <CodingSetup />
    </div>

  );
}

export default Index;

  