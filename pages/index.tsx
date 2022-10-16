import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import BaseBlock from "../components/BaseBlock";
import BlogBlock from "../components/BlogBlock";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Devpenzil</title>
      </Head>
      <div className="bg-[#F2F5F6] min-h-screen w-full">
        <div className="container mx-auto p-2">
          <Header />
          <section className="py-4">
            <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 grid-cols-2">
              <div className="bg-white p-6 rounded-[40px] h-[280px] col-span-2">
                <BaseBlock />
              </div>
              <div className="bg-white p-4 rounded-[40px] h-[280px]"> 2</div>
              <div className="bg-[#FBDDA4] p-4 rounded-[40px] h-full row-span-2 ">
                3
              </div>
              <div className="bg-[#03A9F4] p-4 rounded-[40px] h-[280px]">
                {" "}
                4
              </div>
              <div className="bg-[#FFEA7C] p-4 rounded-[40px] h-[280px]">
                {" "}
                5
              </div>
              <div className="bg-[#A4CEFB] p-4 rounded-[40px] h-full row-span-2">
                {" "}
                6
              </div>
              <div className="bg-[#FBDDA4] p-4 rounded-[40px] h-[280px] col-span-2">
                {" "}
                7
              </div>
              <div className="bg-[#A4CEFB] p-4 rounded-[40px] h-[280px]">
                {" "}
                7
              </div>
              <div className="bg-white  rounded-[40px] h-[280px] col-span-2 overflow-scroll ">
                <BlogBlock />
              </div>
              <div className="bg-white p-4 rounded-[40px] h-[280px] col-span-2">
                {" "}
                9
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
