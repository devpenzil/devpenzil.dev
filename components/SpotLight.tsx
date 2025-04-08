import SplitText from "@/reactBits/SplitText";

function SpotLight() {
  return (
    <div className=" pt-20 ">
      <div className="flex justify-between pb-20">
        <SplitText
          text="I'm Ajo. I Plan, Build and Deploy Apps"
          className="text-8xl font-bold text-left"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          // easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
    </div>
  );
}

export default SpotLight;
