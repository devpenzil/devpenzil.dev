import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import React from "react";

function CommunityWall() {
  return (
    <div className="mx-auto container w-2/3 py-20">
      <PageHeader label="LEAVE A NOTE" heading="Community Wall" />
      <div className="text-center mt-4">
        Thank you for visiting my site! If you feel so inclined, leave me a
        comment, note or suggestion below! I&apos;d love to hear from you!
      </div>
      <Footer />
    </div>
  );
}

export default CommunityWall;
