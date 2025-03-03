import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import SpotLight from "@/components/SpotLight";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ajo Alex | Mobile App Engineer | Home</title>
      </Head>
      <div className="w-2/3 container mx-auto">
        <SpotLight />
        <BlogPreview />
        <Footer />
      </div>
    </>
  );
}
