import Link from "next/link";
import React from "react";

function Ride() {
  return (
    <Link href={"/rides"}>
      <div className="h-full shadow-lg border rounded-2xl bg-[url('/ride.jpg')] bg-cover bg-no-repeat bg-center cursor-pointer overflow-hidden "></div>
    </Link>
  );
}

export default Ride;
