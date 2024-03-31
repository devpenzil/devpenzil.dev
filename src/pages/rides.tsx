import RideList from "@/components/RideList";
import React from "react";

function Rides() {
  return (
    <div className="w-2/3 mx-auto py-24">
      <div className="text-6xl font-semibold mb-10">My Rides</div>
      <RideList />
    </div>
  );
}

export default Rides;
