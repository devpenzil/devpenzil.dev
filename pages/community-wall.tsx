import Footer from "@/components/Footer";
import React from "react";

function CommunityWall() {
  return (
    <div className="mx-auto container w-2/3 py-20">
      <div className="text-base font-bold text-teal-600 text-center">
        LEAVE A NOTE
      </div>
      <div className="text-4xl font-bold text-center">Community Wall</div>
      <div className="text-center mt-4">
        Thank you for visiting my site! If you feel so inclined, leave me a
        comment, note or suggestion below! I&apos;d love to hear from you!
      </div>
      <Footer />
    </div>
  );
}

export default CommunityWall;
