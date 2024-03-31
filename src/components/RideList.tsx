import { rideList } from "@/db/rides";
import React, { useId } from "react";

function RideList() {
  const mapKey = useId();
  return (
    <div>
      {rideList.map((obj) => {
        return <div key={mapKey}>coming soon</div>;
      })}
    </div>
  );
}

export default RideList;
