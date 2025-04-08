import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import SpotLight from "@/components/SpotLight";
import BounceCards from "@/reactBits/BounceCard";
import Head from "next/head";

export default function Home() {
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  return (
    <>
      <Head>
        <title>Ajo Alex | Mobile App Engineer | Home</title>
      </Head>
      <div className="w-2/3 container mx-auto">
        <SpotLight />
        <div className="flex justify-center items-center w-full">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
        <BlogPreview />
        <Footer />
      </div>
    </>
  );
}
