import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HamBurger, Close } from "../../public/icons";

function NavBar() {
  const [shownav, setShownav] = useState(false);
  const { pathname } = useRouter();
  const navItems = [
    { name: "Home", isActive: pathname === "/", route: "/" },
    { name: "About", isActive: pathname === "/about", route: "/about" },
    { name: "Blogs", isActive: pathname === "/blogs", route: "/blogs" },
    {
      name: "Projects",
      isActive: pathname === "/projects",
      route: "/projects",
    },
    { name: "Status", isActive: pathname === "/status", route: "/status" },
  ];

  return (
    <>
      <div>
        <div className="fixed w-full p-4 justify-between flex">
          <div
            className="p-2 cursor-pointer rounded-md "
            onClick={() => {
              setShownav(true);
            }}
          >
            <HamBurger />
          </div>
        </div>
      </div>
      {/* Overlay */}
      {shownav && (
        <div className="w-full h-screen fixed bg-white flex flex-col justify-center items-center space-y-10 overflow-y-auto z-50 p-10">
          <div className="fixed w-full p-4 justify-between flex top-0">
            <div
              className="p-2 cursor-pointer rounded-md "
              onClick={() => {
                setShownav(false);
              }}
            >
              <Close />
            </div>
          </div>
          {navItems.map((obj, index) => {
            return (
              <div
                className={`text-7xl font-semibold cursor-pointer hover:translate-x-3 duration-500 hover:italic text-gray-500 ${
                  obj.isActive ? "text-black italic" : "text-gray-400"
                }`}
                key={index}
                onClick={() => {
                  setShownav(false);
                }}
              >
                <Link href={obj.route}>{obj.name} </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default NavBar;
