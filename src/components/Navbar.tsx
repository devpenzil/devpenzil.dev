import React from "react";

function Navbar() {
  return (
    <div className="container  text-white mx-auto py-8 flex justify-between items-center">
      <div className="font-bold text-xl">Ajo Alex</div>
      <div className="gap-8 flex text-[15px] font-light">
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Blog</div>
        <div className="cursor-pointer">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
