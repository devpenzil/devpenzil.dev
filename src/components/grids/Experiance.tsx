import Link from "next/link";
import React from "react";

function Experiance() {
  return (
    <Link href={"/experience"}>
      <div className="h-36 shadow-lg border rounded-2xl bg-[url('/experiance.jpg')] bg-cover bg-no-repeat group overflow-hidden "></div>
    </Link>
  );
}

export default Experiance;
