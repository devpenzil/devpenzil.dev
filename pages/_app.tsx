import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
