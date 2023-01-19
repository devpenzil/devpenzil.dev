import Link from "next/link";
import React from "react";

function MyGear() {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <div className="text-2xl font-semibold">Are you curious</div>
        <div className="text-sm">to know what is in my desk and desktop</div>
      </div>
      <Link href="/toolbox" className=" px-3 py-2 rounded text-black">
        Checkout
      </Link>
    </div>
  );
}

export default MyGear;
