import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 100,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </>
  );
}

export default MyApp;
