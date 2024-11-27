import { ArrowUpRight } from "iconoir-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <>
      <Head>
        <title>Ajo Alex | React Native Engineer</title>
      </Head>
      <div className="container mx-auto py-20 font-SourGummy ">
        <div className="lg:text-8xl text-4xl font-semibold  leading-relaxed mx-2">
          Hey! 👋 I’m Ajo, <br /> I Plan 📝, Build 🏗️ and Deploy 🚀 Mobile Apps
        </div>

        <div className="flex flex-row justify-between mt-20 mx-2">
          <div className="text-xl font-semibold">
            <Link href="/projects">
              <div className="flex items-center">
                My Projects <ArrowUpRight width={18} height={18} />
              </div>
            </Link>
            <Link href="/blogs">
              <div className="flex items-center">
                My Blogs <ArrowUpRight width={18} height={18} />
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex items-center">
                Contact Me <ArrowUpRight width={18} height={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
