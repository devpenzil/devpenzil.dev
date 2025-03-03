/* eslint-disable @next/next/no-img-element */
import Spacer from "./Spacer";

function Footer() {
  return (
    <>
      <Spacer gap="h-20" />
      <hr />
      <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/devpenzil/">
              <img src="/icons/github.svg" alt="" />
            </a>
            <a href="https://x.com/devpenzil">
              <img src="/icons/x.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/devpenzil/">
              <img src="/icons/linkedin.svg" alt="" />
            </a>
            <a href="https://medium.com/@devpenzil">
              <img src="/icons/medium.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/adv.fox/">
              <img src="/icons/instagram.svg" alt="" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Developed by Ajo Alex. <br /> Built with Next, Tailwind and Supabase
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
