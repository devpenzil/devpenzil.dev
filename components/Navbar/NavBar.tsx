import React from "react";
import { HamBurger, Settings } from "../../public/icons";

function NavBar() {
  return (
    <div className="absolute w-full p-4 justify-between flex">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn border-none focus:ring-2 ">
            <HamBurger />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-3"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn border-none focus:ring-2 ">
            <Settings />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 bg-white shadow-lg rounded-box w-52 mt-3"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
