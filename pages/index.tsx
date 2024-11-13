import Link from "next/link";
import React from "react";

function Index() {
  return (
    <div className="container mx-auto py-20">
      <div className="text-8xl font-semibold  leading-normal">
        Hey! 👋 I’m Ajo, <br /> I Plan 📝, Build 🏗️ and Deploy 🚀 Mobile Apps
      </div>

      <div className="flex flex-row justify-between mt-20">
        <div className="text-xl font-semibold">
          <Link href="/projects">
            <div>My Projects</div>
          </Link>
          <Link href="/blogs">
            <div>My Blogs</div>
          </Link>

          <Link href="/contact">
            <div>Contact Me</div>
          </Link>
        </div>
        {/* <div>jhgjh</div> */}
      </div>
    </div>
  );
}

export default Index;
