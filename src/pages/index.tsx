import Profile from "@/components/Profile";
import FindMe from "@/components/FindMe";
import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";

function Home() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row px-4 ">
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
  );
}

export default Home;
