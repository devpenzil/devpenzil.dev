import About from "@/components/About";
import Blog from "@/components/Blog";
import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";

function Home() {
  return (
    <div>
      <Head>
        <title>Ajo Alex - Mobile Engineer</title>
        <meta name="title" content="Ajo Alex - Mobile Engineer" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devpenzil.dev/" />
        <meta property="og:title" content="Ajo Alex - Mobile Engineer" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devpenzil.dev/" />
        <meta property="twitter:title" content="Ajo Alex - Mobile Engineer" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Navbar />
      <Hero />
      <Blog />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
