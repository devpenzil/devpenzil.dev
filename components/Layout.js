import React, { useEffect } from "react";
import Footer from "./Footer";
import Kbar from "./Kbar";
import NavBar from "./NavBar";
import toast, { Toaster } from "react-hot-toast";

function Layout({ children }) {
  useEffect(() => {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      setTimeout(() => {
        toast("use Ctrl+k / Cmd+k for Shortcuts");
      }, 3000);
    }
  }, []);
  return (
    <div className="dark:bg-slate-800 dark:text-slate-50 min-h-screen">
      <Kbar />
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
