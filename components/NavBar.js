import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
function NavBar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark') ? true : false)
    const theme = localStorage.getItem("theme");
    theme === 'dark' && document.documentElement.classList.add('dark')
    theme === 'light' && document.documentElement.classList.remove('dark');
  }, [dark]);
  return (
    <div className=" z-50 w-full">
      <div className="bg-white dark:bg-slate-800 dark:text-slate-50 py-4">
        <div className="container md:w-2/3 p-2 mx-auto flex justify-between items-center ">
          <div className="space-x-8">
            <Image src="/67946056.jpeg" alt="image" width={50} height={50} className="rounded-full" />
          </div>
          <div className="space-x-8 md:block hidden">
            <span className="rounded-full hover:bg-slate-50 px-4 py-2 hover:text-slate-900">
            <Link href="/">Home</Link>
            </span>
            <span className="rounded-full hover:bg-slate-100 px-4 py-2 hover:text-slate-900">
            <Link href="/about">About</Link>
            </span>
            {/* <span className="rounded-full hover:bg-slate-100 px-4 py-2 hover:text-slate-900">
            <Link href="/works">Works</Link>
            </span> */}
            <span className="rounded-full hover:bg-slate-100 px-4 py-2 hover:text-slate-900">
            <Link href="/blogs">Blogs</Link>
            </span>           
            {/* 
            <Link href="/stats">Stats</Link> */}
          </div>
          <div className="space-x-8">
            <button
              onClick={() => {
                setDark(!dark);
                localStorage.setItem("theme", dark ? "light" : "dark");
              }}
              className='w-10 h-10 flex justify-center items-center bg-slate-300 rounded-full hover:ring-2 ring-slate-900 ring-offset-4 transition duration-500'
            >
              {dark ? <Image src="/moon.svg" alt="image" width={20} height={20} className="rounded-full" />
 : <Image src="/sun.svg" alt="image" width={20} height={20} className="rounded-full" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
