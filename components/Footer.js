import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Footer() {
  const [message, setMessage] = useState("");
  return (
    <div className="dark:bg-slate-800 dark:text-slate-100">
      <div className="container md:w-2/3 mx-auto ">
        {" "}
        <hr />
      </div>
      <div className="container md:w-2/3 mx-auto py-12 flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:flex-row text-lg w-full md:w-1/2 justify-evenly">
          <div className="flex flex-col space-y-4 mx-4 ">
            <div className="font-bold mt-4">GENERAL</div>
            <span className="hover:underline">
              <Link href={"/"}>Home</Link>
            </span>
            <span className="hover:underline">
              <Link href={"/about"}>About</Link>
            </span>
            <span className="hover:underline">
              <Link href={"/blogs"}>Blogs</Link>
            </span>
            <span className="hover:underline">
              <Link href={"/projects"}>Projects</Link>
            </span>
          </div>
          <div className="flex flex-col space-y-4 mx-4">
            <div className="font-bold mt-4">SPECIFICS</div>
            <span className="hover:underline">
              <Link href={"/toolbox"}>Toolbox</Link>
            </span>
            <span className="hover:underline">
              <Link href={"/stats"}>Stats</Link>
            </span>
          </div>
          <div className="flex flex-col space-y-4 mx-4">
            <div className="font-bold mt-4">SOCIAL</div>
            <span className="hover:underline">
              <a
                href="https://github.com/devpenzil"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>
            <span className="hover:underline">
              <a
                href="https://www.linkedin.com/in/devpenzil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </span>
            <span className="hover:underline">
              <a
                href="https://dev.to/devpenzil"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dev
              </a>
            </span>
            <span className="hover:underline">
              <a
                href="https://twitter.com/devpenzil"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 ">
          <div className="text-3xl font-semibold">
            Sent me a message anonymously
          </div>
          <div>
            <form action="https://api.web3forms.com/submit" method="post">
              <input
                type="hidden"
                name="apikey"
                value="4bb3a25f-431b-4fe3-8248-7f5f9ddbbab2"
              />
              <div className="w-full border-2 border-p-border dark:border-slate-200 flex flex-row p-1 mt-6 rounded-full">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Add a message"
                  className="w-full p-2 outline-none rounded-full dark:bg-slate-800"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-800 w-48 rounded-full text-white font-semibold text-lg dark:bg-slate-50 dark:text-slate-800" 
                  onClick={(e) => {
                    if (message === '') {
                      toast.error('Message not be empty')
                      return false;
                    }else{
                      toast('senting your message',{
                        icon:'📨'
                      })
                    }
                    e.preventDefault();
                    axios
                      .post("https://api.web3forms.com/submit", {
                        headers: {
                          Content_Type: "application/json",
                          Accept: "application/json",
                        },
                        apikey: "4bb3a25f-431b-4fe3-8248-7f5f9ddbbab2",
                        body: message,
                      })
                      .then((Response) => {
                        toast.success('Message sent successfully');
                      })
                      .catch((Error) => {
                        console.log(Error);
                      });
                  }}
                >
                  Sent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Footer;
