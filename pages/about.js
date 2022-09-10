import React from "react";
import Timeline from "../components/Timeline";
import HeadSection from "../components/HeadSection";
import { TIMELINEQUERY, GETTOKENS, ABOUT, MYIMAGE } from "../queries/queries";
import { graphcms } from "../graphcms/config";
import Aboutme from "../components/Aboutme";
export async function getStaticProps() {
  const { timelines } = await graphcms.request(TIMELINEQUERY);
  const { cryptos } = await graphcms.request(GETTOKENS);
  const { about } = await graphcms.request(ABOUT);
  const { asset } = await graphcms.request(MYIMAGE);
  return {
    props: {
      timelines,
      cryptos,
      about,
      asset,
    },
  };
}
function About({ timelines, cryptos, about, asset }) {
  return (
    <div className=" dark:bg-slate-800 dark:text-slate-100">
      <HeadSection title="Devpenzil | About" />
      <Aboutme data={about.about} image={asset.url} />
      <Timeline data={timelines} />
      <div className="h-5" />
    </div>
  );
}

export default About;
