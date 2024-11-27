import { Linkedin, NavArrowLeft, Phone } from "iconoir-react";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="container lg:w-2/3 mx-auto py-20 text-lg font-semibold font-SourGummy">
      <div>
        <Link href={"/"}>
          <div className="text-3xl font-semibold mb-8 flex items-center">
            <NavArrowLeft /> Contact me
          </div>
        </Link>
      </div>
      <img src="/me.jpg" alt="" className="my-4 w-52 rounded-full" />
      <div className="w-full lg:w-2/3 md:1/2 font-semibold mx-2">
        Feel free to reach out to me if you want me to build an app for you,
        consult you or your company, build an open-source library, or talk about
        bike riding.
      </div>

      <div className="mt-10 mx-2">
        <a href="https://www.linkedin.com/in/devpenzil/">
          <div className="flex items-center gap-2">
            <Linkedin width={22} height={22} /> Linkedin
          </div>
        </a>
        <a href="https://cal.com/devpenzil/15min">
          <div className="flex items-center gap-2">
            <Phone width={22} height={22} /> Book a call
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
