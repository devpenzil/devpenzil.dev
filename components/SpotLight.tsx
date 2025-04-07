import SplitText from "@/reactBits/SplitText";
import Link from "next/link";

function SpotLight() {
  return (
    <div className=" py-20 ">
      <div className="flex justify-between pb-20">
        <SplitText
          text="I'm Ajo. I Plan, Build and Deploy Apps"
          className="text-8xl font-bold text-left"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <div className="mt-6 flex flex-row gap-8">
        <a href="https://cal.com/ajoalex/30min">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            Book a Meeting
          </div>
        </a>
        <Link href="/projects">
          <div className="bg-gray-100 py-3 px-8 rounded-full text-slate-800 font-semibold hover:ring-4 hover:ring-slate-800 hover:ring-offset-4 transition duration-150">
            View my works
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SpotLight;
