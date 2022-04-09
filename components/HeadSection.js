import React from "react";
import Head from "next/head";
function HeadSection(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <meta name="title" content="Devpenzil Website" />
        <meta
          name="description"
          content="This is the personal website of Ajo Alex aka Devpenzil. Here publish blogs and works and many kind of technichal stuffs"
        />
        <meta
          name="keywords"
          content="developer, devpenzil, ajo, ajoalex, dev, tech, front end, javascript"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ajo Alex" />

        <meta
          name="description"
          content="Personal Website of Ajoalex aka Devpenzil"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devpenzil.dev/" />
        <meta property="og:title" content="Devpenzil | Home" />
        <meta
          property="og:description"
          content="Personal Website of Ajoalex aka Devpenzil"
        />
        <meta property="og:image" content />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devpenzil.dev/" />
        <meta property="twitter:title" content="Devpenzil | Home" />
        <meta
          property="twitter:description"
          content="Personal Website of Ajoalex aka Devpenzil"
        />
        <meta property="twitter:image" content />
      </Head>
    </div>
  );
}

export default HeadSection;
