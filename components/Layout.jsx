import React from "react";
import { Navigation } from "./Navigation";
import Head from "next/head";
export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Next-101</title>
        <meta property="og:title" content="Next - 101" key="og-title" />
        <meta
          property="og:description"
          content="Next 101 tutorial project"
          key="og-desc"
        />
        {/* <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        /> */}
      </Head>
      <Navigation />
      <div className="wrapper">{props.children}</div>
    </div>
  );
};
