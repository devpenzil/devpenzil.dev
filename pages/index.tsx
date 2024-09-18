import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import SpotLight from "@/components/SpotLight";

export default function Home() {
  return (
    <div className="w-2/3 container mx-auto">
      <SpotLight />
      <BlogPreview />
      <Footer />
    </div>
  );
}
