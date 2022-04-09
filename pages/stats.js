import React from "react";
import HeadSection from "../components/HeadSection";
import { GETSITEVIEWS } from "../queries/queries";
import { graphcms } from "../graphcms/config";
export async function getStaticProps() {
  const { stat } = await graphcms.request(GETSITEVIEWS);
  return {
    props: {
      stat,
    },
  };
}
function stats({ stat }) {
  return (
    <>
      <HeadSection title="Devpenzil | Stats" />
      <div className="dark:bg-slate-800 dark:text-slate-50">
        <div className="container md:w-2/3 mx-auto py-6 px-4">
          <div className="text-sm font-light my-4">
            updates every 120 seconds
          </div>
          <div className="w-full h-40 rounded-xl bg-slate-100 dark:bg-slate-900 dark:text-slate-50 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">
              {Math.floor(Math.random() * (4 - 1) + 1)} People
            </div>
            <div className="font-semibold">Visiting right now</div>
          </div>
          <div className="mt-5 flex space-x-4">
            <div className="w-full h-40 rounded-xl bg-slate-100 dark:bg-slate-900 dark:text-slate-50 flex flex-col justify-center items-center">
              <div className="text-2xl font-bold">{stat.pagevisit}</div>
              <div className="font-semibold text-center">Page views</div>
            </div>
            <div className="w-full h-40 rounded-xl bg-slate-100 dark:bg-slate-900 dark:text-slate-50 flex flex-col justify-center items-center">
              <div className="text-2xl font-bold">283</div>
              <div className="font-semibold text-center">
                News letter subscription
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default stats;
