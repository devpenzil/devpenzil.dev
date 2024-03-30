import Link from "next/link";
import React from "react";

function Ride() {
  return (
    <Link href={"/rides"}>
      <div className="h-36 shadow-lg border rounded-2xl bg-[url('/ride.jpg')] bg-cover bg-no-repeat bg-center cursor-pointer overflow-hidden group">
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 group-hover:flex items-center p-4 hidden" >
          <div className="text-white font-semibold text-2xl"> My Rides</div>
        </div>
      </div>
    </Link>
  );
}

export default Ride;
