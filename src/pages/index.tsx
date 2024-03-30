import Profile from "@/components/Profile";
import FindMe from "@/components/FindMe";
import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";

function Home() {
  return (
    <div className="container mx-auto flex flex-row ">
      <div className="w-1/2 pt-24">
        <Profile />
      </div>
      <div className="w-1/2 py-24 h-screen overflow-scroll ">
        <FindMe />
        <div className="mt-4">
          <AboutMe />
        </div>
        <div className="mt-4">
          <Blogs />
        </div>
      </div>
    </div>
  );
}

export default Home;
