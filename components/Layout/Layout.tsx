import React, { Children } from "react";
import NavBar from "../Navbar/NavBar";
import "./Layout.module.css";
function Layout({ children }: any) {
  return (
    <div>
      <div className="lg:w-[400px] lg:h-[400px] md:w-[200px] md:h-[200px] w-[100px] h-[100px]  fixed rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 blurone -z-10" />
      <div className="lg:w-[400px] lg:h-[400px] md:w-[200px] md:h-[200px] w-[100px] h-[100px] fixed  rounded-full blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-0 right-0 blurtwo -z-10 " />
      <NavBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
