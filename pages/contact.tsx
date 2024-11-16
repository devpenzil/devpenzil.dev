import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="container lg:w-2/3 mx-auto py-20 text-lg font-semibold font-SourGummy">
      <div>
        <Link href={"/"}>
          <div className="text-3xl font-semibold mb-8 flex items-center">
            <img src="/icons/back.svg" alt="" className="w-8 h-8" /> Contact me
          </div>
        </Link>
      </div>
      <div className="w-full lg:w-2/3 md:1/2 font-semibold mx-2">
        Feel free to reach out to me if you want me to build an app for you,
        consult you or your company, build an open-source library, or talk about
        bike riding.
      </div>
      <div className="mt-10 mx-2">
        <a href="https://x.com/devpenzil">
          <div>Twitter</div>
        </a>
        <a href="https://www.linkedin.com/in/devpenzil/">
          <div>Linkedin</div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
