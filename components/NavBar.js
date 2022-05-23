import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamBurger from "../assets/svg/HamBurger";
import Close from "../assets/svg/Close";
import Github from "../assets/svg/Github";
import Linkedin from "../assets/svg/Linkedin";
import Instagram from "../assets/svg/Instagram";
import Twitter from "../assets/svg/Twitter";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [mmenuOpen, SetMmenuOpen] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark") ? true : false);
    const theme = localStorage.getItem("theme");
    theme === "dark" && document.documentElement.classList.add("dark");
    theme === "light" && document.documentElement.classList.remove("dark");

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.opacity = "1";
      } else {
        document.getElementById("navbar").style.opacity = "0";
      }
      prevScrollpos = currentScrollPos;
    };
  }, [dark]);
  const navItems = [
    {
      name: "Home",
      route: "/",
      active: router.pathname === "/" ? true : false,
    },
    {
      name: "About",
      route: "/about",
      active: router.pathname === "/about" ? true : false,
    },
    {
      name: "Works",
      route: "/works",
      active: router.pathname === "/works" ? true : false,
    },
    {
      name: "Blogs",
      route: "/blogs",
      active: router.pathname === "/blogs" ? true : false,
    },
    {
      name: "Support",
      route: "/support",
      active: router.pathname === "/support" ? true : false,
    },
  ];
  return (
    <>
      <div className="md:hidden flex flex-row justify-between items-center p-6">
        <div>
          <Image
            src="/67946056.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div>
          <button onClick={() => SetMmenuOpen(!mmenuOpen)}>
            {mmenuOpen ? (
              <Close stroke={dark ? "#fff" : "#000"} />
            ) : (
              <HamBurger stroke={dark ? "#fff" : "#000"} />
            )}
          </button>
        </div>
      </div>
      {mmenuOpen && (
        <div className="fixed w-full h-screen bg-white dark:bg-slate-800 z-50">
          <div className="w-full h-screen flex flex-col space-y-3 items-center px-6">
            {navItems.map((obj) => {
              return (
                <span
                  className={
                    " px-4 py-2  " +
                    (obj.active === true &&
                      "underline underline-offset-4 decoration-2 decoration-emerald-300 font-semibold ")
                  }
                >
                  <Link href={obj.route}>{obj.name}</Link>
                </span>
              );
            })}

            <button
              onClick={() => {
                setDark(!dark);
                localStorage.setItem("theme", dark ? "light" : "dark");
              }}
              className="w-10 h-10 flex justify-center items-center bg-slate-300 rounded-full hover:ring-2 ring-slate-900 ring-offset-4 transition duration-500"
            >
              {dark ? (
                <Image
                  src="/moon.svg"
                  alt="image"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <Image
                  src="/sun.svg"
                  alt="image"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              )}
            </button>
            <div className="h-10" />
            <div className="space-x-4 flex">
              <a href="https://github.com/devpenzil">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/devpenzil/">
                <Linkedin />
              </a>
              <a href="https://instagram.com/devpenzil">
                <Instagram />
              </a>
              <a href="https://twitter.com/devpenzil">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      )}
      <div
        className=" z-50 w-full fixed transition hidden md:block"
        id="navbar"
      >
        <div className="bg-white dark:bg-slate-800 dark:text-slate-50 py-4">
          <div className="container md:w-2/3 p-2 mx-auto flex justify-between items-center ">
            <div className="space-x-8">
              <Image
                src="/67946056.png"
                alt="image"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="space-x-8 md:block hidden">
              {navItems.map((obj) => {
                return (
                  <span
                    className={
                      "rounded-full hover:bg-slate-50 px-4 py-2 hover:text-slate-900 " +
                      (obj.active === true &&
                        "underline underline-offset-4 decoration-2 decoration-emerald-300 ")
                    }
                  >
                    <Link href={obj.route}>{obj.name}</Link>
                  </span>
                );
              })}
            </div>
            <div className="space-x-8">
              <button
                onClick={() => {
                  setDark(!dark);
                  localStorage.setItem("theme", dark ? "light" : "dark");
                }}
                className="w-10 h-10 flex justify-center items-center bg-slate-300 rounded-full hover:ring-2 ring-slate-900 ring-offset-4 transition duration-500"
              >
                {dark ? (
                  <Image
                    src="/moon.svg"
                    alt="image"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src="/sun.svg"
                    alt="image"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-40 h-10 bg-white dark:bg-slate-800" />
    </>
  );
}

export default NavBar;
