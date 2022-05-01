import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import toast, { Toaster } from "react-hot-toast";

function Layout({ children }) {

  return (
    <div className="dark:bg-slate-800 dark:text-slate-50 min-h-screen">
      <NavBar />
      {children}
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default Layout;
