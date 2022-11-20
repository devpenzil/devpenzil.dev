import React from "react";
import AboutNote from "../components/aboutnote/AboutNote";
import Header from "../components/header/Header";
import MyGear from "../components/mygear/MyGear";
import { graphcms } from "../graphcms/config";
import { ABOUT, TIMELINEQUERY } from "../queries/query";

export async function getStaticProps() {
  const { timelines } = await graphcms.request(TIMELINEQUERY);
  const { about } = await graphcms.request(ABOUT);
  return {
    props: {
      timelines,
      about,
    },
  };
}
function Timeline({ timelines, about }) {
  return (
    <>
      <Header page="About" />
      <div className="container md:w-2/3 lg:1/2 px-4 py-16 mx-auto">
        <AboutNote data={about?.about} />
        <MyGear />
      </div>
    </>
  );
}

export default Timeline;
