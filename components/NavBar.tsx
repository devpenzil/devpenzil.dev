import Link from "next/link";
import React from "react";

function NavBar() {
  const navItem = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
  ];
  return (
    <div className="container w-2/3 mx-auto py-4 flex flex-row justify-center items-center gap-10 text-base">
      {navItem.map((obj) => {
        return (
          <Link href={obj.link} key={obj.name}>
            {obj.name}
          </Link>
        );
      })}
    </div>
  );
}

export default NavBar;
