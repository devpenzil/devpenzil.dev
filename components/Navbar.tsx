import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-7xl font-semibold">
            Ajo Alex <span className="text-base font-light">aka devpenzil</span>
          </div>
          <div className="text-sm mt-3">
            Powered by caffeine, code, and open roads.
          </div>
        </div>
        <div className="flex items-center">
          <button className="btn">🖥️ Code</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
