import AboutDescription from "@/components/AboutDescription";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import GearsAndSkills from "@/components/GearsAndSkills";
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import WorkExperience from "@/components/WorkExperience";

function About() {
  return (
    <div className="container mx-auto w-2/3 pt-20">
      <PageHeader label="ABOUT ME" heading="Here's my story." />
      <AboutDescription />
      <Spacer gap={"h-20"} />
      <WorkExperience />
      <Spacer gap={"h-20"} />
      <BlogPreview />
      <Spacer gap={"h-20"} />
      <GearsAndSkills />
      <Spacer gap={"h-20"} />
      <Footer />
    </div>
  );
}

export default About;
