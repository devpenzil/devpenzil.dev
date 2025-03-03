import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PagesTopLoader } from "nextjs-toploader/pages";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PagesTopLoader />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
