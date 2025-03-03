/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="container w-2/3 mx-auto">
      <div className="navbar bg-base-100 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm"
            >
              <Link href="/about">Who am I ?</Link>
              <Link href="/projects">What I built ?</Link>
              <Link href="/blogs">What I write ?</Link>
            </ul>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Link href="/">
                <img src="/67946056.jpg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-xl">
            <Link href="/about">Who am I ?</Link>
            <Link href="/projects">What I built ?</Link>
            <Link href="/blogs">What I write?</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="inline-grid *:[grid-area:1/1] mr-2">
            <div className="status status-success animate-ping"></div>
            <div className="status status-success"></div>
          </div>{" "}
          Online Now
        </div>
      </div>
    </div>
  );
}

export default NavBar;
