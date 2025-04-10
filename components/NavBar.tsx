/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavBar() {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <div className="container w-2/3 mx-auto">
      <div className="navbar bg-base-100 py-6">
        <div className="navbar-start">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Link href="/">
                <img src="/67946056.jpg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-xl">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blogs">Blogs</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
