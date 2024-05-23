import React, { useId } from "react";

function RideList() {
  const mapKey = useId();
  return (
    <>
      <div className="mb-4 flex flex-row gap-4 text-xl">
        <div className="cursor-pointer">All</div>
        <div className="cursor-pointer">Endurance</div>
        <div className="cursor-pointer">Travel</div>
        <div className="cursor-pointer">Offroad</div>
      </div>
      {/* <div className="flex gap-4 flex-wrap">
        {[].map((obj) => {
          return (
            <div
              key={mapKey}
              className={`w-96 h-64 border border-gray-500 rounded p-4 relative cursor-pointer `}
            >
              <div className="text-2xl font-semibold truncate">
                {obj.start_location}
              </div>
              <div>
                {obj.start_date} - {obj.end_date}
              </div>
              <div className="absolute bottom-4 right-5">
                {obj.total_distance} KM
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default RideList;
