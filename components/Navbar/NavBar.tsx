import Link from "next/link";
import React from "react";
import { sitelinks, sociallinks } from "../../constants/navlinks";
import { HamBurger, Settings } from "../../public/icons";

function NavBar() {
  return (
    <div>
      <div className="fixed w-full p-4 justify-between flex">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn border-none focus:ring-2 ">
              <HamBurger />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-3 "
            >
              {sitelinks.map((obj, index) => {
                return (
                  <li key={index} className="hover:bg-gray-100 rounded-md">
                    <Link href={obj.route}>{obj.name}</Link>
                  </li>
                );
              })}
              <hr />
              {sociallinks.map((obj, index) => {
                return (
                  <li key={index} className="hover:bg-gray-100 rounded-md">
                    <a href={obj.link}>{obj.name}</a>
                  </li>
                );
              })}
              <hr />

              <li className="hover:bg-gray-100 rounded-md">
                <Link
                  href="/status"
                  className="flex justify-between items-center"
                >
                  <span>Status</span>
                  <span className="flex h-3 w-3 justify-center items-center">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </Link>
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
              <li className="hover:bg-gray-100 rounded-md">
                <Link href="/" className="flex justify-between items-center">
                  <span>Light theme</span>
                  <span className="flex h-3 w-3 justify-center items-center">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-md">
                <a>Gen z (coming soon)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
