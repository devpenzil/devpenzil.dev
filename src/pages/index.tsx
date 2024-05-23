import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";
import FindMe from "@/components/FindMe";
import Profile from "@/components/Profile";

function Home() {
  return (
    <>
      <div className="w-full absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-0 z-10 p-2 text-center text-white font-semibold">
        Fan of my works? I appreciate your{" "}
        <a href="https://github.com/sponsors/devpenzil" className="underline">
          support
        </a>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row px-4 z-0  ">
        <div className="lg:w-1/2 pt-24">
          <Profile />
        </div>
        <div className="lg:w-1/2 py-24 lg:h-screen overflow-scroll ">
          <div className="hidden md:block">
            <FindMe />
            <div className="mt-4">
              <AboutMe />
            </div>
            <div className="mt-4">
              <Blogs />
            </div>
          </div>
          <div className="block md:hidden">
            You can only see these section in a desktop
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
