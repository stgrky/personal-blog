import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { init } from "commandbar";
if (typeof window !== "undefined") {
  init("52be0be5");
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const loggedInUserId = "12345";
    window.CommandBar.boot(loggedInUserId).then(() => {});

    return () => {
      window.CommandBar.shutdown();
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
