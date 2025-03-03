import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import Head from "next/head";
import React from "react";

function projects() {
  return (
    <>
      <Head>
        <title>Ajo Alex | Mobile App Engineer | Projects</title>
      </Head>
      <div className="w-2/3 container mx-auto  font-semibold ">
        <Spacer gap={"h-10"} />
        <PageHeader
          heading="A selection of my favorite works."
          label="Projects"
        />
        <div className="text-center py-48 ">Coming soon</div>
        <Footer />
      </div>
    </>
  );
}

export default projects;
