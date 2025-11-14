"use client";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Garage from "@/components/Garage";
import MyProfile from "@/components/MyProfile";
import Navbar from "@/components/Navbar";
import Polarstep from "@/components/Polarstep";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhichPart from "@/components/WhichPart";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [mode, setMode] = useState<string>("");
  useEffect(() => {
    // localStorage.setItem("mode", "code");
    // const value = localStorage.getItem("mode");
    // setMode(value);
  }, []);

  return (
    <div className="w-1/2 container mx-auto py-16">
      <Navbar />
      {mode === "code" && (
        <>
          <Divider title="Who am I" />
          <About />
          <Divider title="What I Write" />
          <Blogs />
          <Divider title="The Launch pad" />
          <Projects />
          <Divider title="What I did for living" />
          <Experience />
          <Divider title="The End" />
          <Footer />
        </>
      )}
      {mode === "ride" && (
        <>
          <Divider title="My Profile" />
          <MyProfile />
          <Divider title="Travel Track" />
          <Polarstep />
          <Divider title="The Garage" />
          <Garage />
          <Divider title="The End" />
          <Footer />
        </>
      )}
      {mode === "" && (
        <WhichPart
          onSelect={(e) => {
            setMode(e);
          }}
        />
      )}
    </div>
  );
};

export default Page;
