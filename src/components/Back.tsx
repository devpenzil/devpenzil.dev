import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Back() {
  const router = useRouter();
  return (
    <Link href={"/"}>
      <div className="mb-10 border rounded-lg border-black w-20 text-center p-2">
        Home
      </div>
    </Link>
  );
}

export default Back;
