import Link from "next/link";
import React from "react";

function GearsAndSkills() {
  return (
    <div className="grid grid-cols-2 min-h-[500px]">
      <div className="flex flex-col justify-center pr-8">
        <div className="text-3xl font-semibold mb-2">
          Interested in my gear?
        </div>
        <div className="text-base mb-6">
          I keep a list of software, applications, extensions, hardware and a
          list of supplies I&apos;ve used to set up my office for those who are
          interested.
        </div>
        <div className="flex">
          <Link href="/toolbox">
            <div className="bg-slate-800 py-3 px-8 rounded-full text-white  font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
              Checkout my toolbox
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[url('https://images.pexels.com/photos/28350926/pexels-photo-28350926/free-photo-of-a-computer-desk-with-a-monitor-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] rounded-md bg-cover bg-center" />
    </div>
  );
}

export default GearsAndSkills;
