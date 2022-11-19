import Head from "next/head";
import React from "react";

function Header({ page }: any) {
  return (
    <Head>
      <title>Devpenzil | {page} </title>
    </Head>
  );
}

export default Header;
