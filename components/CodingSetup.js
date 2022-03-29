import React from "react";
import { useRouter } from "next/router";
import PrimaryButton from "./PrimaryButton";

function CodingSetup() {
  const router = useRouter();
  return (
    <div className="container md:w-2/3 mx-auto py-6 flex flex-col md:flex-row justify-between p-4 items-center">
      <div className="w-full md:w-1/2 mt-4" >
        <div className="text-4xl font-semibold mb-4">Interested in my gear?</div>
        <div className="text-lg leading-loose">I keep a list of software, applications, extensions, hardware and a list of  supplies I&#39;ve used to set up my workspace for those who are interested.</div>
        <PrimaryButton
          label={"Check out my toolbox"}
          trigger={() => {
            router.push("/toolbox");
          }}
        />
      </div>
      <div className="w-full md:w-1/2 mt-4">
        <div
          className="bg-gray-400 md:w-96 w-full mx-auto h-96 rounded-md bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CodingSetup;
