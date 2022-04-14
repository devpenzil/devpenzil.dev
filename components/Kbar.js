import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Kbar() {
  const router = useRouter();
  const [active, SetActive] = useState(false);
  const blocks = [
    { name: "Home", route: "/", short: "h", type: "route" },
    { name: "About", route: "/about", short: "a", type: "route" },
    { name: "Works", route: "/works", short: "o", type: "route" },
    { name: "Blogs", route: "/blogs", short: "b", type: "route" },
    { name: "Tool Box", route: "/toolbox", short: "t", type: "route" },
    { name: "Stats", route: "/stats", short: "s", type: "route" },
    {
      name: "Github",
      route: "https://github.com/devpenzil",
      short: "g",
      type: "link",
    },
    {
      name: "Linkedin",
      route: "https://www.linkedin.com/in/devpenzil/",
      short: "l",
      type: "link",
    },
    {
      name: "Instagram",
      route: "https://instagram.com/devpenzil",
      short: "i",
      type: "link",
    },
    {
      name: "Twitter",
      route: "https://twitter.com/devpenzil",
      short: "e",
      type: "link",
    },
  ];
  const trigger = (event) => {
    event.preventDefault();
    if (event.key === "k" || (event.key === "K" && event.ctrlKey === true)) {
      SetActive(true);
    }
    if (event.key === "Escape") {
      SetActive(false);
    }
    blocks.map((obj) => {
      String(obj.short) === String(event.key) &&
        event.ctrlKey === true &&
        action(obj.type, obj.route);
    });
  };
  useEffect(() => {
    document.addEventListener("keydown", trigger);
  }, []);
  const action = (type, route) => {
    if (type === "route") {
      router.push(`${route}`);
    }
    if (type === "link") {
      window.open(route);
    }
    SetActive(false);
  };
  return (
    <div>
      {active && (
        <div className="w-full h-screen flex justify-center items-center fixed">
          <div className="w-96 h-[500px] bg-white dark:bg-slate-800 shadow-2xl p-4 rounded-lg z-[9999] border ">
            <div>
              {/* <input
                type="text"
                placeholder="search..."
                className="p-3 w-full outline-none border border-slate-600 rounded-md"
                value={searchValue}
                onChange={() => {
                  SetSearchValue;
                }}
                autoFocus
              /> */}
              <div className="mt-2 overflow-y-scroll h-[465px] scrollbar-none ">
                <ul>
                  {blocks.map((obj, i) => {
                    return (
                      <li
                        className="py-3 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 border-l-2 hover:border-slate-600 border-white w-full flex justify-between items-center"
                        key={i}
                        onClick={() => {
                          action(obj.type, obj.route);
                        }}
                      >
                        <div>{obj.name}</div>
                        <div className="bg-slate-400 px-2 py-1 rounded text-white text-sm font-bold   ">
                          Ctrl + {obj.short}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kbar;
