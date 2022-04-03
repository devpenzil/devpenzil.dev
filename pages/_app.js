import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
