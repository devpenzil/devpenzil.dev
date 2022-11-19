import React from "react";
import Header from "../components/header/Header";

function Status() {
  return (
    <>
      <Header page="Status" />
      <div className="container h-screen flex justify-center items-center mx-auto w-1/2 py-16">
        <div className="p-4 w-[400px] border-2 rounded"></div>
      </div>
    </>
  );
}

export default Status;
