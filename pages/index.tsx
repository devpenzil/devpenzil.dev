import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import React from "react";

function Index() {
  return (
    <div className="font-SpaceGrotesk">
      <NavBar />
      <Hero />
      <Stack />
      <Projects />
      <Footer />
    </div>
  );
}

export default Index;
