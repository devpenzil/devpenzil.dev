import React from "react";
function Footer() {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-100">
      <div className="container md:w-2/3 mx-auto ">
        <hr />
      </div>
      <div className="container md:w-2/3 mx-auto py-12 px-4 flex flex-col md:flex-row justify-between ">
        <div className="mt-2">@ 2022 Devpenzil</div>
      </div>
    </div>
  );
}

export default Footer;
