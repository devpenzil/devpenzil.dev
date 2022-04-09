import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50 min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
