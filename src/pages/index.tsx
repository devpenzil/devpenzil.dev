import Profile from "@/components/Profile";
import FindMe from "@/components/FindMe";
import AboutMe from "@/components/AboutMe";

function Home() {
  return (
    <div className="container mx-auto flex flex-row ">
      <div className="w-1/2 pt-24">
        <Profile />
      </div>
      <div className="w-1/2 pt-24 h-screen overflow-scroll ">
      <div className="text-3xl font-semibold mb-4 ">Find Me</div>
      <FindMe />
      <div className="text-3xl font-semibold mb-4 mt-14">About Me</div>
      <AboutMe />
      <div className="text-3xl font-semibold mb-4 mt-14">Blogs</div>
      <FindMe />
    
      </div>
    </div>
  );
}

export default Home;
